import { Component, Input } from '@angular/core';
import { Vehicles } from 'src/app/models/assets.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() vehicle: Vehicles | null = null;
}
