import { Component, OnInit } from '@angular/core';
import { BarberService } from 'src/app/core/service/barber.service';
import { Appointment } from 'src/app/models/appointment.model';
import { EmployeeService } from '../human-resources/employee.service';

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
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    // this.barberService.getBarberAppointments().subscribe(response => {
    //   this.appointmentsRequested = response.filter(res => res.paid === false);
    //   console.log(typeof this.appointmentsRequested[0]['date']);


    //   this.appointmentsAssigned = response.filter(res => res.paid === true);
    // });
    const userSub = this.employeeService.getSub();
    console.log(userSub);

    this.barberService.getBarberAppointmentsById(userSub).subscribe(response => {
      console.log(response);

    })
  }
}
