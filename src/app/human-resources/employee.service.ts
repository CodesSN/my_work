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

  addEmployee(newEmployee: Employee){
    console.log(newEmployee);
  }

  saveEmployee(updatedEmployee: Employee){
    // Logica para salvar a un empleado
    const body = {
      name: updatedEmployee.name,
      email: updatedEmployee.email,
      address: updatedEmployee.address,
      phone: updatedEmployee.phone,
      civil_status: updatedEmployee.civil_status,
      date: updatedEmployee.date,
      ssn: updatedEmployee.ssn
    }
    // Logica para añadir a un empleado
    return this.http.put<any>(`${environment.apiUrl}/employee/${updatedEmployee.id}`, body);
  }
}
