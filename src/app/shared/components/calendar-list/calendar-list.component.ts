import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '../../UnsubscribeOnDestroyAdapter';
import { ModalReportAppointmentComponent } from '../modal-report-appointment/modal-report-appointment.component';
import { Appointment } from 'src/app/models/appointment.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent extends UnsubscribeOnDestroyAdapter implements OnChanges {
  @Input() data:any;
  list!:any;

  constructor(
    private dialog: MatDialog,
  ){
    super()
  }

  ngOnChanges(changes:SimpleChanges):void {
    if(this.data !== undefined){
      this.list = this.data;
    }
  }

  getStartHours(list:any){
    const date:any = list.start;
    return date;
  }

  async getEndHours(list:any){
    const date:any = list.start;
    return date;
  }

  print(info:Appointment){
    console.log(info);

    const dialogRef = this.dialog.open(ModalReportAppointmentComponent, {
      data: {
        appointment: info,
        report: 'assigned',
      },
      height: '100%',
      width: '550px'
    });

    this.subs.sink = dialogRef.afterClosed().subscribe();
  }

}
