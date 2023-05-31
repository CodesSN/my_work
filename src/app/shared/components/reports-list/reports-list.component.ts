import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent {
  @Input() title = '';
  @Input() reports!: string[];

  viewReport(report:any){
    console.log(report);
  }
}
