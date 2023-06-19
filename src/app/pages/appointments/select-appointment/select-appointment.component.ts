import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BarberService } from 'src/app/core/service/barber.service';
import { BarberInfo } from 'src/app/models/barber.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-appointment',
  templateUrl: './select-appointment.component.html',
  styleUrls: ['./select-appointment.component.scss']
})
export class SelectAppointmentComponent implements OnInit {
  public barbers: any;
  public infoBarber:any;
  public dates:any;
  public hours: any;
  public appointmentForm!: FormGroup;
  public barberInfo!: BarberInfo | null;

  constructor(
    private barberService: BarberService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ){}

  async ngOnInit(){
    this.createForm();
    this.barberInfo = this.barberService.getBarberInfo();
    if(this.barberInfo) {
      this.appointmentForm.get('barber')?.setValue(this.barberInfo.name);
      this.appointmentForm.get('id')?.setValue(this.barberInfo.id);
    }

    // console.log(this.barberInfo);
    await this.getAppointmentAvailableHourDates();
  }


  professional(barber:any) {
    console.log(barber);
  }

  selectService(service: string){
    console.log(service);
    switch(service) {
      case "Haircut Short to Medium":
        this.appointmentForm.get('service')?.setValue(service);
        break;
      case "Haircut Medium to Long":
        this.appointmentForm.get('service')?.setValue(service);
        break;
      case 'Beard Trim':
        this.appointmentForm.get('service')?.setValue(service);
        break;
      case 'Beard Fade':
        this.appointmentForm.get('service')?.setValue(service);
        break;
      case 'Beard Mustache':
        this.appointmentForm.get('service')?.setValue(service);
        break;
      case 'Beard Shave':
        this.appointmentForm.get('service')?.setValue(service);
        break;
      default:
        break;
    }
  }

  saveUserData(){
    console.log('Input');
  }

  // Obtiene el nombre del dia
  getDayName(date:string){
    const formatDate = new Date(date)
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = formatDate.getDay();
    // Get the name of the day of the week using the obtained number
    const dayName = dayNames[dayOfWeek];
    const shortDay = dayName.slice(0,3);
    return shortDay;
  }
  // Obtiene el mes del nombre
  getMonthName(dateString: string): string {
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const englishMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthInEnglish = englishMonths[monthIndex];
    return monthInEnglish;
  }
  // Obtiene el numero del dia
  getDayNumber(dateString: string): number {
    const date = new Date(dateString);
    const dayNumber = date.getDate();
    return dayNumber;
  }
  private createForm(){
    this.appointmentForm = this.fb.group({
      id: [null, [Validators.required]],
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
  private getAppointmentAvailableDates() {
    return fetch(`${environment.apiUrl}/citas/fechas-disp`)
      .then(response => response.json())
      .then(data => {
          // Aquí puedes trabajar con los datos recibidos de la API
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

  print(){
    //make a delay
    console.log(this.appointmentForm.getRawValue());

  }

}
