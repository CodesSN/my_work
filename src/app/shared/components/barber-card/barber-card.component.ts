import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barber-card',
  templateUrl: './barber-card.component.html',
  styleUrls: ['./barber-card.component.scss']
})
export class BarberCardComponent {
  @Input() barber = '';
  @Input() description = '';
  @Input() rate = '';
  @Input() services = '';
}
