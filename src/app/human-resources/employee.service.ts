import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
// import


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getAllEmployees(){
    // return thi
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
