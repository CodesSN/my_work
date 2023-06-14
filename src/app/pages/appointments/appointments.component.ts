import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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

  constructor(
    private barberService: BarberService
  ){}

  async ngOnInit(){
    await this.getAppointmentAvailableHourDates();
    this.barberService.getBarbers().subscribe(response => {
      this.barbers = response
    });

    console.log(this.dates);


  }

  getAppointmentData() {
    // Get the iframe element.
    const iframe = document.getElementById("calendar") as HTMLIFrameElement;
  }

  professional(barber:any) {
    console.log(barber);
  }

  // initMap() {
  //   // Crear mapa centrado en la ubicación del cliente
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //       const latLng = new google.maps.LatLng(
  //           position.coords.latitude,
  //           position.coords.longitude
  //       );

  //       const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  //           center: latLng,
  //           zoom: 12
  //       });

  //       // Agregar marcador en la ubicación del cliente
  //       const marker = new google.maps.Marker({
  //           position: latLng,
  //           map: map,
  //           draggable: true,
  //           animation: google.maps.Animation.DROP
  //       });
  //       const searchInput = document.getElementById('search-input');
  //       const autocomplete = new google.maps.places.Autocomplete(searchInput);
  //       autocomplete.bindTo('bounds', map);
  //       const geocoder = new google.maps.Geocoder();

  //       autocomplete.addListener('place_changed', function () {
  //           const place = autocomplete.getPlace();
  //           if (place.geometry) {
  //               map.panTo(place.geometry.location);
  //               map.setZoom(15);
  //               marker.setPosition(place.geometry.location);
  //               serviceData.location = {
  //                   lat: place.geometry.location.lat(),
  //                   lng: place.geometry.location.lng()
  //               };
  //               serviceData.address = place.formatted_address;
  //               document.getElementById("location").innerHTML = serviceData.address;
  //           }
  //       });
  //       // Escuchar el evento 'dragend' del marcador para obtener la ubicación seleccionada
  //       google.maps.event.addListener(marker, 'dragend', function () {
  //           // Obtener las nuevas coordenadas del marcador
  //           const latLng = marker.getPosition();

  //           // Obtener la dirección correspondiente a las coordenadas
  //           geocoder.geocode({ 'location': latLng }, function (results, status) {
  //               if (status === 'OK') {
  //                   if (results[0]) {
  //                       // Obtener la dirección en formato de texto
  //                       var address = results[0].formatted_address;
  //                       serviceData.location = {
  //                           lat: latLng.lat(),
  //                           lng: latLng.lng()
  //                       };
  //                       serviceData.address = address;
  //                       document.getElementById("location").innerHTML = address;
  //                   } else {
  //                       console.log('No se encontraron resultados');
  //                   }
  //               } else {
  //                   console.log('Geocodificación fallida debido a: ' + status);
  //               }
  //           });
  //       });
  //   });
  // }

  private getAppointmentAvailableDates() {
    return fetch(`${environment.apiUrl}/citas/fechas-disp`)
      .then(response => response.json())
      .then(data => {
          // Aquí puedes trabajar con los datos recibidos de la API
          console.log(data);
          this.hours = data;
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
            console.log(responseData.horas);
            this.dates =  responseData.horas.fechas
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
