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

  getKPIS(sub:string){
    return this.http.get<any>(`${environment.apiUrl}/revx_Get_Week_Month_Year_Stats?sub=${sub}`,)
  }
}
