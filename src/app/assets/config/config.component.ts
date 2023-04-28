import { Component, OnInit } from '@angular/core';
import { trucks } from 'src/app/models/assets.model';
import { AssetsService } from '../assets.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  public data:Employee[]|trucks[] = [];
  public displayedColumns: string[] = ['id','Anumber', 'Atype', 'plate', 'up', 'code','Ayear','make','vin','model','options'];

  constructor(
    private assetsService:AssetsService
  ){}

  ngOnInit(): void {
    this.assetsService.getAllAssets().subscribe(data => {
      this.data = data.body;
    })
  }
}