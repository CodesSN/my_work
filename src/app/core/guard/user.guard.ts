import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { EmployeeService } from 'src/app/pages/human-resources/employee.service';
import { BarberService } from '../service/barber.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private employeeService: EmployeeService,
    private barberService: BarberService
  ){}

  async canActivate()  {
    const sub =  this.employeeService.getSub();
    const userRole = await this.barberService.fetchData(sub)
      .then(response => {
        return response[0].id_role;
    })
    if(userRole === 3){
      return true;
    }
    return true;
    // return false;
  }

}
