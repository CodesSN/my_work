import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent implements OnChanges {
  @Input() data:any;
  list!:any;

  constructor(){
    console.log('data: ' , this.data);
  }

  ngOnChanges(changes:SimpleChanges):void {
    if(this.data !== undefined){
      this.list = this.data;
    }
  }

  getStartHours(list:any){
    const date:any = list.start;
    return date;
  }

  async getEndHours(list:any){
    const date:any = list.start;
    return date;
  }

}
