import { formatDate } from '@angular/common';
export class Calendar {
  id: string;
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  details: string;

  constructor(calendar: Calendar) {
    {
      this.id = calendar.id || '';
      this.title = calendar.title || '';
      this.category = calendar.category || '';
      this.startDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.endDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.details = calendar.details || '';
    }
  }
}

export interface WorkingDay {
  day: string;
  ui: string;
  selected:boolean;
}

export interface WorkingData {
  sub:any;
}

export interface PostWorkingData extends WorkingData {
  times: string;
  days: string;
}
