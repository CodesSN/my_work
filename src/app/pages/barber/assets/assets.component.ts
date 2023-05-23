import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { trucks } from 'src/app/models/assets.model';
import { AssetsService } from 'src/app/pages/assets/assets.service';
import { subscribeOn, switchMap } from 'rxjs';
import { EmployeeService } from '../../human-resources/employee.service';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  public data:Employee[]|trucks[] = [];
  public displayedColumns: string[] = ['id','Anumber', 'Atype', 'plate', 'up', 'code','Ayear','make','vin','model','assigned_To'];
  public bannerText = "Dear barber, we would like to remind you that your barber license is nearing its expiration date. Make sure to renew it on time to avoid any disruptions to your profession. Our team is here to assist you throughout the renewal process and address any questions you may have."
  public bannerTitle = "Your Barber License is Expiring!";
  private employee!:Employee;
  public vehicles!: trucks[]

  constructor(
    private assetsService: AssetsService,
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    const sub = this.employeeService.getSub();
    console.log(sub);


    // this.employeeService.getAllEmployees().subscribe(response => {
    //   // console.log(response.body);
      // if(response.statusCode === 200){
      //   const employeesData = response.body;
      //   this.employee = employeesData.filter( employee => employee.sub === sub)[0];
      //   const id = this.employee.id
    //     console.log(this.employee.id);
    //   }
    // })

    // this.employeeService.getAllEmployees().pipe(
    //   switchMap(response => {
    //     if(response.statusCode === 200){
    //       const employeesData = response.body;
    //       this.employee = employeesData.filter( employee => employee.sub === sub)[0];
    //       const id = this.employee.id
    //       return this.assetsService.getAsset(id);
    //     }
    //   })
    // )

    this.assetsService.getAsset(sub).subscribe(response => {
      console.log(response);
    })


    // this.assetsService.getAllAssets().subscribe(data => {
    //   const vehicles = data.body;
    //   vehicles.filter(vehicle => console.log(vehicle.assigned_To));

    //   console.log(vehicles);

    // })
  }


}
