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
    this.barberService.getBarberAppointments().subscribe(response => {
      this.appointmentsRequested = response.filter(res => res.paid === false);
      this.appointmentsAssigned = response.filter(res => res.paid === true);
    })
  }
}
