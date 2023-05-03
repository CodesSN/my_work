import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private http: HttpClient
  ){}

  getAllEmployees(){
    return this.http.get<Response>(`${environment.apiUrl}/employee`);
  }

  addEmployee(body:any){
    console.log(body);
    return this.http.post<any>(`${environment.apiUrl}/employee`, body);
  }

  saveEmployee(body:any){
    return this.http.put<any>(`${environment.apiUrl}/employee/${body.id}`, body);
  }
}
