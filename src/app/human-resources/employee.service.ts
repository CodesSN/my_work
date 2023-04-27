import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';


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

  addEmployee(id:string){
    console.log(id);
    // Logica para añadir a un empleado
  }

  saveEmployee(id:string){
    // Logica para salvar a un empleado
    // Verificar si la informacion es la misma
    console.log(id);

  }
}
