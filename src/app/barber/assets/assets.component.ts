import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { trucks } from 'src/app/models/assets.model';
import { AssetsService } from 'src/app/assets/assets.service';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  public data:Employee[]|trucks[] = [];
  public displayedColumns: string[] = ['id','Anumber', 'Atype', 'plate', 'up', 'code','Ayear','make','vin','model','assigned_To'];

  constructor(
    private assetsService: AssetsService
  ){}

  ngOnInit(): void {
    this.assetsService.getAllAssets().subscribe(data => {
      this.data = data.body;
      // console.log(data);
    })
  }
}
