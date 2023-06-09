import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnsubscribeOnDestroyAdapter } from '../../UnsubscribeOnDestroyAdapter';
import { ModalReportAppointmentComponent } from '../modal-report-appointment/modal-report-appointment.component';
import { Appointment } from 'src/app/models/appointment.model';
import { BarberService } from 'src/app/core/service/barber.service';
@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent extends UnsubscribeOnDestroyAdapter {
  @Input() title!: 'Requested' | 'Assigned' | "Completed";
  @Input() appointments!: Appointment[];
  private data:any;

  constructor(
    private dialog: MatDialog,
    private barberService: BarberService
  ){
    super();
  }

  viewReport(appointment:Appointment){
    this.data = {
      appointment:appointment,
      report: 'Assigned'
    }
    const dialogRef = this.dialog.open(ModalReportAppointmentComponent, {
      data: this.data,
      height:'100%',
      width: '100%;'
    });
    this.subs.sink = dialogRef.afterClosed().subscribe(response => {
      // Si el modal fue existosa la peticion regresa un confirm
      if(response === 'confirm'){
        this.subs.sink =  this.barberService.getBarberAppointmentsMig().subscribe(response => {
          // Para ver como se va a filtrar la informacion lo analizamos en base al titulo
          switch(this.title){
            case 'Requested':
              // Filtra la informacion si es falta
              this.appointments = response.filter(res => res.paid === false);
              break;
            case 'Assigned':
              this.appointments = response.filter(res => res.paid === true);
              break;
            case 'Completed':
              // Completed
              break;
          }
          location.reload();
        })
      }
    });
  }

  getDate(date: Date | null){
    if(date) {
      // Convierte la fecha a un objeto Date
      const newDate = new Date(date);
      // Obtiene los componentes de la fecha
      const day = newDate.getDate();
      const month = newDate.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11
      const year = newDate.getFullYear();

      const dateTS = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
      return dateTS;

    }
    return ""
  }
}
