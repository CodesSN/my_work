import { Component, OnInit } from '@angular/core';
import { BarberService } from 'src/app/core/service/barber.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  public barbers: any;
  public infoBarber:any;

  constructor(
    private barberService: BarberService
  ){}

  ngOnInit(): void {
    this.barberService.getBarbers().subscribe(response => {
      this.barbers = response
      console.log(response);

    });
  }

  getAppointmentData() {
    // Get the iframe element.
    const iframe = document.getElementById("calendar") as HTMLIFrameElement;
  }

  professional(barber:any) {
    console.log(barber);
  }

  about(){
    //make a delay
  }
}
