import { Component, Input } from '@angular/core';
import { LogIn } from 'angular-feather/icons';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-monitorist-table',
  templateUrl: './monitorist-table.component.html',
  styleUrls: ['./monitorist-table.component.scss']
})
export class MonitoristTableComponent {
  // filas:any = [
  //   {
  //     selected: false,
  //     appointment: 'Ricardo' ,
  //     payment: false,
  //     distances: true,
  //     confirmAppointment: true
  //   },
  //   {
  //     selected: false,
  //     appointment: 'Daniel' ,
  //     payment: true,
  //     distances: true,
  //     confirmAppointment: true
  //   },
  //   {
  //     selected: false,
  //     appointment: 'Pavel' ,
  //     payment: false,
  //     distances: false,
  //     confirmAppointment: true
  //   },
  // ];

  @Input() appointments: Appointment[] = []

  selectedInfo(event:Event, fila:any){
    const checkbox =  event.target as HTMLInputElement
    console.log(fila);
    console.log(checkbox.checked);
  }

  // changeState(index: number, property: string){
  //   this.filas[index][property] = !this.filas[index][property];
  // }


}
