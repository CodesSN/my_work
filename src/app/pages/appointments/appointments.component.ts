import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarberService } from 'src/app/core/service/barber.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  public barbers: any;
  public infoBarber:any;
  public dates:any;
  public hours: any;
  public appointmentForm!: FormGroup;

  constructor(
    private barberService: BarberService,
    private fb: FormBuilder
  ){}

  async ngOnInit(){
    this.createForm();
    await this.getAppointmentAvailableHourDates();
    this.barberService.getBarbers().subscribe(response => {
      this.barbers = response
    });
  }


  getAppointmentData() {
    // Get the iframe element.
    const iframe = document.getElementById("calendar") as HTMLIFrameElement;
  }

  professional(barber:any) {
    console.log(barber);
  }

  service(service: string){
    console.log(service);
  }

  saveUserData(){
    console.log('Input');
  }

  confirmAppointment(){
    //
  }

  private createForm(){
    this.appointmentForm = this.fb.group({
      barber: [null, [Validators.required]],
      service:[null, [Validators.required]],
      duration: [null, [Validators.required]],
      cost: [null, [Validators.required]],
      tip: [0, [Validators.required]],
      date: [null, [Validators.required]],
      time: [null, [Validators.required]],
      location: [null, Validators.required],
      address: [null,  [Validators.required]],
      nameClient: [null, [Validators.required]],
      emailClient: [null, [Validators.required]],
      phoneClient: [null, [Validators.required]],
      addressClient: [null, [Validators.required]],
    })
  }

  private getDay(date:Date){
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = date.getDay();
    // Get the name of the day of the week using the obtained number
    const dayName = dayNames[dayOfWeek];
    return dayName;
  }

  private getAppointmentAvailableDates() {
    return fetch(`${environment.apiUrl}/citas/fechas-disp`)
      .then(response => response.json())
      .then(data => {
          // Aquí puedes trabajar con los datos recibidos de la API
          console.log(data);
          this.dates = data.fechas;
      })
      .catch(error => {
          // Manejo de errores
          console.error('Error:', error);
      });
  }

  private getAppointmentAvailableHours(date:Date) {
    return fetch(`${environment.apiUrl}/citas/horas-disp`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ fecha: date })
      })
          .then(response => response.json())
          .then(responseData => {
            // console.log(responseData.horas);
            this.hours =  responseData.horas
          })
          .catch(error => {
              // Manejo de errores
              console.error('Error:', error);
          });
  }

  private async getAppointmentAvailableHourDates(){
    await this.getAppointmentAvailableDates();
    await this.getAppointmentAvailableHours(new Date());
  }

  about(){
    //make a delay
  }
}
