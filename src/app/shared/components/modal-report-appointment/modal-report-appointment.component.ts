import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BarberService } from 'src/app/core/service/barber.service';
import { Appointment } from 'src/app/models/appointment.model';

export interface DialogData {
  appointment: Appointment;
  report: 'Requested' | 'Assigned' | "Completed";
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

  constructor(
    public dialogRef: MatDialogRef<ModalReportAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private barberService: BarberService
  ){}

  ngOnInit(): void {
    this.appointment = this.data.appointment;
    if(this.data.report === 'Requested') {
      this.confirmButton = true
    } else {
      this.confirmButton = false;
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  // Una vez que se genero la peticion de las citas, se genero
  confirmAppointment(){
    console.log(this.data);
    const body = {
      id_sub:this.appointment.id_sub,
      date: this.appointment.date
    }
    // Subir la peticion con el sub_id y la fecha de la cita
    this.barberService.changeAppointmentState(body).subscribe(response => {
      console.log(response);
    })

  }


}
