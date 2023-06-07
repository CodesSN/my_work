import { Component, OnInit } from '@angular/core';
import { BarberService } from 'src/app/core/service/barber.service';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-monitorist',
  templateUrl: './monitorist.component.html',
  styleUrls: ['./monitorist.component.scss']
})
export class MonitoristComponent implements OnInit{
  public appointmentsRequested:Appointment[] = [];
  public appointmentsAssigned:Appointment[] = [];

  constructor(
    private barberService: BarberService,
  ){}

  ngOnInit(): void {
    // this.barberService.getBarberAppointments().subscribe(response => {
    //   this.appointmentsRequested = response.filter(res => res.paid === false);
    //   console.log(typeof this.appointmentsRequested[0]['date']);


    //   this.appointmentsAssigned = response.filter(res => res.paid === true);
    // });

    this.barberService.getBarberAppointmentsMig().subscribe(response => {
      console.log(response);

      this.appointmentsRequested = response.filter(res => !res.paid);
      console.log(this.appointmentsRequested);


      this.appointmentsAssigned = response.filter(res => res.paid);
      console.log(this.appointmentsAssigned);

    });


  }
}
