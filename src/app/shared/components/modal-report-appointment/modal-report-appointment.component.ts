import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BarberService } from 'src/app/core/service/barber.service';
import { Appointment } from 'src/app/models/appointment.model';

export interface DialogData {
  appointment: Appointment | any;
  report: 'Requested' | 'Assigned' | "Completed" | "Appointment";
}

@Component({
  selector: 'app-modal-report-appointment',
  templateUrl: './modal-report-appointment.component.html',
  styleUrls: ['./modal-report-appointment.component.scss']
})
export class ModalReportAppointmentComponent implements OnInit {
  public title = 'Appointment';
  public appointment!: Appointment;
  public confirmButton = false;
  public lat = 0;
  public lng = 0;

  constructor(
    public dialogRef: MatDialogRef<ModalReportAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private barberService: BarberService
  ){}

  ngOnInit(): void {
    console.log(this.data.appointment);

    this.appointment = this.data.appointment;
    this.lat = this.appointment.lat;
    this.lng = this.appointment.lng;

    console.log("lat ", typeof this.appointment.lat)
    if(this.data.report === 'Requested') {
      this.confirmButton = true
    } else {
      this.confirmButton = false;
    }
  }

  close(): void {
    this.dialogRef.close('close');
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

  getHour(date: Date | null) {
    if(date){
      // Separa las partes de la hora
      const newDate = new Date(date);
      const hour = newDate.getHours();
      const minutes = newDate.getMinutes();
      // Genera el formato deseado en TypeScript
      const hourTS = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

      return hourTS;
    }
    return '';
  }


  // Una vez que se genero la peticion de las citas, se genero
  confirmAppointment(){
    console.log(this.data);
    const body = {
      id_sub:this.appointment.id_sub,
      date: this.appointment.creation_date
    }
    // Subir la peticion con el sub_id y la fecha de la cita
    this.barberService.changeAppointmentState(body).subscribe(response => {
      console.log(response);
    })
    this.dialogRef.close('confirm');
  }
}
