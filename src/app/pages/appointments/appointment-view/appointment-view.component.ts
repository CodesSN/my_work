import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.scss']
})
export class AppointmentViewComponent {
  public pbp = 'h';
  public sn = 'Beard Trim';
  public ad = '2023/06/21';
  public ah = '16:32';
  public al = 'Gabriela Mistral #2526 , jardines del norte';
  public bName = 'David Orleans';
  public rate = 4.5;
  public services = 155;
  public desc = 'skilled barber known for his passion for the art of...';
  public lat = 28.685199557288794;
  public lng = -106.09710642795405;
  public h = '100%';
}
