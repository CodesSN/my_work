import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnsubscribeOnDestroyAdapter } from '../../UnsubscribeOnDestroyAdapter';
import { DialogData, ModalReportAppointmentComponent } from '../modal-report-appointment/modal-report-appointment.component';
import { Appointment } from 'src/app/models/appointment.model';
@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent extends UnsubscribeOnDestroyAdapter {
  @Input() title!: 'Requested' | 'Assigned' | "Completed";
  @Input() appointments!: Appointment[];
  data:any;

  constructor(
    private dialog: MatDialog
  ){
    super();
  }

  viewReport(appointment:Appointment){
    switch(this.title){
      case 'Requested':
        this.data = {
          appointment:appointment,
          report: "Requested"
        }
        break;
      case 'Assigned':
        this.data = {
          appointment:appointment,
          report: 'Assigned'
        }
        break;
      case 'Completed':
        this.data = {
          appointment:appointment,
          report: 'Completed'
        }
        break;
    }
    const dialogRef = this.dialog.open(ModalReportAppointmentComponent, {
      data: this.data
    });
    this.subs.sink = dialogRef.afterClosed().subscribe(response => {
      // console.log(response);
    });
  }
}
