import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-view-notification',
  templateUrl: './view_notification.component.html',
  styleUrls: ['./view-notification.component.scss']
})
export class ViewNotificationComponent {
  public value: string;
  public created_by: string;
  public date: string;
  public type: string;
  public tittle: string;
  public col: string;
constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData)
{
   this.value = data.data.value;
   this.created_by = data.data.created_by;
   this.date = data.data.date;
   this.type = data.data.type;
   this.tittle = data.data.tittle;
   this.col = data.data.col;
}
}
