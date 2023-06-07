import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { BarberService } from 'src/app/core/service/barber.service';

@Component({
  selector: 'app-monitorist-list',
  templateUrl: './monitorist-list.component.html',
  styleUrls: ['./monitorist-list.component.scss']
})
export class MonitoristListComponent implements OnInit {
  public appointmentsRequested: Appointment[] = [];

  constructor(
    private barberService: BarberService
  ){}

  ngOnInit(): void {
    this.barberService.getBarberAppointments().subscribe(response => {
      this.appointmentsRequested = response.filter(res => res.paid === false);
    });
  }
}
