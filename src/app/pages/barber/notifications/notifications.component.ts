import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AxiosRequestConfig } from 'axios';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import axios from 'axios';
import { ViewNotificationComponent } from './view-notification/view_notification.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public notifications: any[];
  public temp: any[];
  constructor(private dialog: MatDialog) {
    super()
    this.notifications = [];
    this.temp = [];
  }
  async ngOnInit(): Promise<void> {
    this.notifications = await this.getData();
    this.temp = await this.getData();
  }
  viewNotification(data: any) {
    const dialogRef = this.dialog.open(ViewNotificationComponent, {
      width: '750px',
      height: 'fit-content',
      maxHeight: '700px',
      data: {
        data,
      },
    });

    this.subs.sink = dialogRef.afterClosed().subscribe();
  }
  async getData(): Promise<any> {
    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/notifications/get?sub=c7baefe3-ae2b-4ff0-92d0-a87791de798e',
      headers: {},
    };

    return axios.request(config).then(async (response) => {
      const datos = response.data.body;
      return datos;
    });
  }

  async filterData(type: string){
    if(type === 'All'){
      this.notifications = this.temp;
    }else{
      this.notifications = this.temp;
      this.notifications = this.notifications.filter(item => item.type === type);
    }
  }
}
