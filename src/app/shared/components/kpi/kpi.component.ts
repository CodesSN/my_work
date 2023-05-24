import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() percentage = '';
  @Input() percentageStatus = '';
}
