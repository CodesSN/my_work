import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EmployeeService } from 'src/app/pages/human-resources/employee.service';
import { BarberService } from '../service/barber.service';

@Injectable({
  providedIn: 'root'
})
export class BarberGuard implements CanActivate {
  constructor(
    private employeeService: EmployeeService,
    private barberService: BarberService,
    private router: Router
  ){}

  async canActivate()  {
    const sub =  this.employeeService.getSub();
    const user = await this.barberService.fetchData(sub)
      .then(response => {
        return response;
    });

    console.log(user[0].upload);

    if(user[0].id_role === 2){
      return true;
    }
    return false;
  }
}
