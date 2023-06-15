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
    if(this.appointmentForm.valid){
      // Valid
    }
  }

  // initMap(): void {
  //   // Crear mapa centrado en la ubicación del cliente
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     const latLng = new google.maps.LatLng(
  //       position.coords.latitude,
  //       position.coords.longitude
  //     );

  //     const mapElement = document.getElementById('map');
  //     if(mapElement){
  //       const map = new google.maps.Map(mapElement, {
  //         center: latLng,
  //         zoom: 12,
  //       });

  //       const marker = new google.maps.Marker({
  //         position: latLng,
  //         map: map,
  //         draggable: true,
  //         animation: google.maps.Animation.DROP,
  //       });

  //       const searchInput = document.getElementById('search-input') as HTMLInputElement;
  //       const autocomplete = new google.maps.places.Autocomplete(searchInput);
  //       autocomplete.bindTo('bounds', map);
  //       const geocoder = new google.maps.Geocoder();
  //       autocomplete.addListener('place_changed', function () {
  //         const place = autocomplete.getPlace();
  //         if (place.geometry) {
  //           map.panTo(place.geometry.location);
  //           map.setZoom(15);
  //           marker.setPosition(place.geometry.location);
  //           serviceData.location = {
  //             lat: place.geometry.location.lat(),
  //             lng: place.geometry.location.lng(),
  //           };
  //           serviceData.address = place.formatted_address;
  //           document.getElementById('location').innerHTML = serviceData.address;
  //         }
  //       });
  //     }

  //     // Agregar marcador en la ubicación del cliente




  //     // Escuchar el evento 'dragend' del marcador para obtener la ubicación seleccionada
  //     google.maps.event.addListener(marker, 'dragend', function () {
  //       // Obtener las nuevas coordenadas del marcador
  //       const latLng = marker.getPosition();

  //       // Obtener la dirección correspondiente a las coordenadas
  //       geocoder.geocode({ location: latLng }, function (results, status) {
  //         if (status === 'OK') {
  //           if (results[0]) {
  //             // Obtener la dirección en formato de texto
  //             const address = results[0].formatted_address;
  //             serviceData.location = {
  //               lat: latLng.lat(),
  //               lng: latLng.lng(),
  //             };
  //             serviceData.address = address;
  //             document.getElementById('location').innerHTML = address;
  //           } else {
  //             console.log('No se encontraron resultados');
  //           }
  //         } else {
  //           console.log('Geocodificación fallida debido a: ' + status);
  //         }
  //       });
  //     });
  //   });
  // }

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

  about(){
    //make a delay
  }
}

