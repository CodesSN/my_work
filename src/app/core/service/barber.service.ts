import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  constructor(
    private http: HttpClient
  ) {}

  getVans(){
    this.http.get<any>(`${environment}/`)
}
}
