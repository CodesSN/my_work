import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/pages/human-resources/employee.service';
import { BarberService } from '../service/barber.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private employeeService: EmployeeService,
    private barberService: BarberService
  ){}

  async canActivate()  {
    const sub =  this.employeeService.getSub();
    const userRole = await this.barberService.fetchData(sub)
      .then(response => {
        console.log(response);

        return response[0].id_role;
    })
    if(userRole === 1){
      return true;
    }
    return true;
  }
}
