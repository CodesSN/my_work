import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() back = false;

  constructor(
    private location: Location
  ){}

  pageBack(){
    //
    this.location.back();
  }
}
