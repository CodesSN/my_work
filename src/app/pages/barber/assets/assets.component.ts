import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { trucks } from 'src/app/models/assets.model';
import { AssetsService } from 'src/app/pages/assets/assets.service';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  public data:Employee[]|trucks[] = [];
  public displayedColumns: string[] = ['id','Anumber', 'Atype', 'plate', 'up', 'code','Ayear','make','vin','model','assigned_To'];
  bannerText = "Dear barber, we would like to remind you that your barber license is nearing its expiration date. Make sure to renew it on time to avoid any disruptions to your profession. Our team is here to assist you throughout the renewal process and address any questions you may have."
  bannerTitle = "Your Barber License is Expiring!";
  constructor(
    private assetsService: AssetsService
  ){}

  ngOnInit(): void {
    this.assetsService.getAllAssets().subscribe(data => {
      this.data = data.body;
    })
  }
}
