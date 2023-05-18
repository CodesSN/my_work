import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Calendar, PostWorkingData, WorkingData } from '../../../models/calendar.model';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class CalendarService {
  dataChange: BehaviorSubject<Calendar[]> = new BehaviorSubject<Calendar[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Calendar;
  currentUser: any;

  constructor(
    private http: HttpClient
  ) {}

  get data(): Calendar[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }

  getCurrentUser(){
    this.currentUser =  JSON.parse(
      localStorage.getItem(
        'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.' +
          localStorage.getItem(
            'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.LastAuthUser'
          ) +
          '.userData'
      ) as string
    ).UserAttributes[0].Value;

    return this.currentUser;
  }

  addUpdateCalendar(calendar: Calendar): void {
    this.dialogData = calendar;
    // console.log(this.dialogData);
    // console.log(this.dataChange);
  }
  deleteCalendar(calendar: Calendar): void {
    this.dialogData = calendar;
  }
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  postWorkingHours(data: PostWorkingData){
    return this.http.post<any>(`${environment.apiUrl}/worktime/Barber/post`, data);
  }

  getWorkingHours(data: string){
    return this.http.get<any>(`${environment.apiUrl}/worktime/Barber/get?sub=${data}`);
  }
}
