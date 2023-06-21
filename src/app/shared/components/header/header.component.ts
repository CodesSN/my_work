import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Input() back = false;
  @Input() user_l : any = 'h';
  @Input() dark = true;
  constructor(
    private location: Location
  ){}

  pageBack(){
    //
    this.location.back();
  }
}
