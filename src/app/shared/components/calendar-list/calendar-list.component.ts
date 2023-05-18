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
    console.log(this.data);
  }

  ngOnChanges(changes:SimpleChanges):void {
    if(this.data.length !== 0){
      this.list = this.data;
    }
  }

  getStartHours(list:any){
    const date:Date = list.start;
    const dateS = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    return dateS;
  }

  getEndHours(list:any){
    const date:Date = list.end;
    const dateS = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;

    return dateS;
  }

}
