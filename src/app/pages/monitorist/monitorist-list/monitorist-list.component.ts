import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { BarberService } from 'src/app/core/service/barber.service';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';

@Component({
  selector: 'app-monitorist-list',
  templateUrl: './monitorist-list.component.html',
  styleUrls: ['./monitorist-list.component.scss']
})
export class MonitoristListComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  public appointmentsRequested: Appointment[] = [];

  constructor(
    private barberService: BarberService,
  ){
    super();
  }

  ngOnInit(): void {
    this.subs.sink = this.barberService.getBarberAppointmentsMig().subscribe(response => {
      this.appointmentsRequested = response;
      console.log(this.appointmentsRequested);
    });
  }


}
