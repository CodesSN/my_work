import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Earnings, Period } from 'src/app/models/earnings.model';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent implements OnChanges {
  @Input() type!:'earning';
  @Input() title = '';
  @Input() percentage = '';
  @Input() percentageStatus = '';
  @Input() kpiData!: Period | null;
  public value = "";




  ngOnChanges(changes: SimpleChanges): void {
    if(this.type === 'earning' && this.kpiData){
      // console.log('earn');
      console.log(this.kpiData);
      const kpi = this.kpiData.kpis.totalEarnings
      this.value = `$${kpi}` ;



    }
  }
}
