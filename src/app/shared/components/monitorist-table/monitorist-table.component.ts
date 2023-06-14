import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Appointment, AppointmentStatus } from 'src/app/models/appointment.model';
import { ModalReportAppointmentComponent } from '../modal-report-appointment/modal-report-appointment.component';
import { UnsubscribeOnDestroyAdapter } from '../../UnsubscribeOnDestroyAdapter';
import { BarberService } from 'src/app/core/service/barber.service';

@Component({
  selector: 'app-monitorist-table',
  templateUrl: './monitorist-table.component.html',
  styleUrls: ['./monitorist-table.component.scss']
})
export class MonitoristTableComponent extends UnsubscribeOnDestroyAdapter {
  @Input() appointments: Appointment[] = [];
  private data:any;

  constructor(
    private dialog: MatDialog,
    private barberService: BarberService,
  ){
    super()
  }

  selectedInfo(event:Event, fila:any){
    const checkbox =  event.target as HTMLInputElement;
    console.log(fila);
    console.log(checkbox.checked);
  }

  viewAppointment(appointment:Appointment){
    this.data = {
      appointment:appointment,
      report: 'Assigned'
    }

    const dialogRef = this.dialog.open(ModalReportAppointmentComponent, {
      data: this.data
    });
    this.subs.sink = dialogRef.afterClosed().subscribe();
  }

  changeAppointmentMonitoristState(appointment:Appointment, property: 'confirmed' | 'paid' | 'inPlace'){
    const status:AppointmentStatus = {
      id: appointment.id,
      attr: property
    }
    console.log(status);



    this.subs.sink = this.barberService.changeAppointmentMonitoristStatus(status).subscribe(response => {
      console.log(response);
    })
  }
}
