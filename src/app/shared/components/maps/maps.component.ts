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
    this.markerOptions.draggable = false;
  }
  @Input() lat!: any;
  @Input() lng!: any;
  @Input() zoom!: any;
  @Input() h!: any;
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


  markerOptions: google.maps.MarkerOptions = {
    draggable: true,
  };
  addMarker(lat: number, lng: number) {
    const markerPosition: google.maps.LatLngLiteral = {
      lat: lat,
      lng: lng
    };
    this.markerPositions.push(markerPosition);
  }
}

