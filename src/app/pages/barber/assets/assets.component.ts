import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Vehicles, trucks } from 'src/app/models/assets.model';
import { AssetsService } from 'src/app/pages/assets/assets.service';
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
  public bannerText2 = "Building a strong customer base is crucial for any business, and earning the '20 Loyal Customers' badge signifies a significant achievement. By cultivating lasting relationships with your clients, you not only establish a solid foundation for your enterprise but also create a loyal community that values your products or services."

  public bannerTitle = "Your Barber License is Expiring!";
  public bannerTitle2 = "Archievement"
  private employee!:Employee;
  public vehicle!: Vehicles;


  constructor(
    private assetsService: AssetsService,
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    const sub = this.employeeService.getSub();
    this.assetsService.getAsset(sub).subscribe(response => {
      this.vehicle = response.body;
    })
  }
}
