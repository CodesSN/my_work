import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';
import { Employee } from '../models/employee.model';
import { axisBottom } from 'd3';
import axios from 'axios'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  datos:any[] = [];
  constructor(
    private http: HttpClient
  ){}

  getAllEmployees(){
    return this.http.get<Response>(`${environment.apiUrl}p`);
  }

  getAllEmployeesAuto(){
    const config:any = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/employee',
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    return axios.request(config)
    .then((response) => {
      const datos = response.data.body.map((e: any) => e.name);
      return datos;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  }

  addEmployee(body:any){
    console.log(body);
    return this.http.post<any>(`${environment.apiUrl}/employee`, body);
  }

  saveEmployee(body:any){
    return this.http.put<any>(`${environment.apiUrl}/employee/${body.id}`, body);
  }
}
