import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  ngOnInit(): void {
    this.center = {
      lat: this.lat,
      lng: this.lng
    }
    this.addMarker(this.lat, this.lng);
  }
  @Input() lat!: any;
  @Input() lng!: any;
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: this.lat,
      lng: this.lng
    }
  ];
  // basic map start
  display?: google.maps.LatLngLiteral;
  center: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng,
  };
  zoom = 19;


  markerOptions: google.maps.MarkerOptions = {
    draggable: true,
  };
  addMarker(lat: number, lng: number) {
    console.log(this.lat, this.lng);
    const markerPosition: google.maps.LatLngLiteral = {
      lat: lat,
      lng: lng
    };
    this.markerPositions.push(markerPosition);
  }
}

