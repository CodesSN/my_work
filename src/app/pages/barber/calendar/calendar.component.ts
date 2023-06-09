import { Component, ViewChild, OnInit } from '@angular/core';
import {
  CalendarOptions,
  EventClickArg,
  EventApi,
} from '@fullcalendar/core';
import axios , { AxiosRequestConfig } from 'axios';
import { HttpClient } from '@angular/common/http';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Calendar, WorkingDay } from '../../../models/calendar.model';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { CalendarService } from './calendar.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { INITIAL_EVENTS } from './events-util';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { FormWorkingTimeComponent } from './form-working-time/form-working-time.component';
import { ModalReportAppointmentComponent } from 'src/app/shared/components/modal-report-appointment/modal-report-appointment.component';
import { Appointment } from 'src/app/models/appointment.model';
import { LogIn } from 'angular-feather/icons';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  // Calendar
  @ViewChild('calendar', { static: false })
  calendar: Calendar | null;
  public addCusForm: UntypedFormGroup;
  dialogTitle: string;
  filterOptions = 'All';
  calendarData!: Calendar;
  workingDays!:string[];
  workingHours!: string[];
  filterItems: string[] = [
    'work',
    'personal',
  ];
  calendarEvents?: EventInput[];
  tempEvents?: EventInput[];

  public filters = [
    { name: 'work', value: 'Work', checked: true },
    { name: 'personal', value: 'Personal', checked: true },
  ];


  constructor(
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    public calendarService: CalendarService,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    super();
    this.dialogTitle = 'New Appoitment';
    const blankObject = {} as Calendar;
    this.calendar = new Calendar(blankObject);
    this.addCusForm = this.createCalendarForm(this.calendar);
  }

  async ngOnInit(): Promise<void> {
    const sub = this.calendarService.getCurrentUser();
    this.calendarService.getWorkingHours(sub).subscribe(response => {
      if(response.statusCode){
        const arrayHours = response.body.times.split('-');
        const arrayDays = response.body.days.split('-');

        this.workingDays = arrayDays;
        this.workingHours = arrayHours
      }
    })
    const appointment = await this.getAppoitments(sub);
    this.calendarEvents = await this.getEvents(appointment);
    this.tempEvents = this.calendarEvents;
    this.calendarOptions.events = this.calendarEvents;
  }

  async getEvents(citas:any){
    const events:EventInput[] = [];
    citas.forEach((e:any) => {
      events.push({
        id: e.id,
        start: e.start,
        end: e.end,
        title: e.nameClient,
        nameClient  : e.nameClient,
        address: e.address,
        service: e.service,
        allDay: false,
        client: e.nameClient,
        emailClient: e.emailClient,
        duration: e.duration,
        dur: e.duration,
        groupId: e.service,
        barber: e.barber,
        cost: e.cost,
        creation_date: e.creation_date,
        phoneClient: e.phoneClient,
        lat: e.lat,
        lng: e.lng
      })
    })
    return events
  }
  async getAppoitments(sub:string){
    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://awbkpur9r9.execute-api.us-east-1.amazonaws.com//mig/appointments/by_id?id_sub=${sub}`,
      headers: {},
    };

    return axios.request(config).then(async (response) => {
      const datos = response.data;
      return datos;
    });
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    headerToolbar: {
      right: 'prev,next today',
      left: 'title',
      center: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'timeGridWeek',
    weekends: true,
    // editable: true,
    selectable: true,

    // selectMirror: true,
    // dayMaxEvents: true,
    // Hace la accion de las casillas ya existentes
    eventClick: this.handleEventClick.bind(this),
    // eventsSet: this.handleEvents.bind(this),
  };

  addWorkingTime(){
    const dialogRef = this.dialog.open(FormWorkingTimeComponent, {
      data: {
        calendar: this.calendar,
        action: 'add',
      },
    });

    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 'submit') {
        //
      }
    });
  }
  changeCategory(event: MatCheckboxChange, filter: { name: string }) {
    console.log(event);
    console.log(filter);


    if (event.checked) {
      this.filterItems.push(filter.name);
    } else {
      this.filterItems.splice(this.filterItems.indexOf(filter.name), 1);
    }
    this.filterEvent(this.filterItems);
  }

  filterEvent(element: string[]) {
    const list = this.calendarEvents?.filter((x) =>
      element.map((y?: string) => y).includes(x.groupId)
    );

    this.calendarOptions.events = list;
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.eventClick(clickInfo);
  }

  // Event click
  eventClick(row: EventClickArg) {
    const calendarData = {
        id: row.event.id,
        nameClient  : row.event.extendedProps['nameClient'],
        address: row.event.extendedProps['address'],
        service: row.event.extendedProps['service'],
        start: row.event.start,
        end: row.event.end,
        creation_date: row.event.extendedProps['creation_date'],
        cost: row.event.extendedProps['cost'],
        duration: row.event.extendedProps['dur'],
        phoneClient: row.event.extendedProps['phoneClient'],
        emailClient: row.event.extendedProps['emailClient'],
        lat: row.event.extendedProps['lat'],
        lng: row.event.extendedProps['lng']
    };

    const dialogRef = this.dialog.open(ModalReportAppointmentComponent, {
      data: {
        appointment: calendarData,
        report: 'assigned',
      },
      height: '100%',
      width: '50%'
    });

    this.subs.sink = dialogRef.afterClosed().subscribe();
  }

  private getDate(date: Date | null){
    if(date) {
      // Convierte la fecha a un objeto Date
      const newDate = new Date(date);
      // Obtiene los componentes de la fecha
      const day = newDate.getDate();
      const month = newDate.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11
      const year = newDate.getFullYear();

      const dateTS = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
      return dateTS;

    }
    return ""
  }

  private getHour(date: Date | null) {
    if(date){
      // Separa las partes de la hora
      const newDate = new Date(date);
      const hour = newDate.getHours();
      const minutes = newDate.getMinutes();
      // Genera el formato deseado en TypeScript
      const hourTS = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

      return hourTS;
    }
    return '';
  }


  editEvent(eventIndex: number, calendarData: Calendar) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const calendarEvents = this.calendarEvents!.slice();

    const singleEvent = Object.assign({}, calendarEvents[eventIndex]);
    console.log(calendarEvents);
    console.log(singleEvent);


    singleEvent.id = calendarData.id;
    singleEvent.title = calendarData.title;
    singleEvent.start = calendarData.startDate;
    singleEvent.end = calendarData.endDate;
    singleEvent.className = this.getClassNameValue(calendarData.category);
    singleEvent.groupId = calendarData.category;
    singleEvent['details'] = calendarData.details;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array

    this.calendarOptions.events = calendarEvents;
  }

  // Actualiza la informacion despues de que el evento del calendario es ejecutado
  handleEvents(events: EventApi[]) {
    // console.log(events);
  }

  // Crea el formulario del calendario
  createCalendarForm(calendar: Calendar): UntypedFormGroup {
    return this.fb.group({
      id: [calendar.id],
      title: [
        calendar.title,
        [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
      ],
      category: [calendar.category],
      startDate: [calendar.startDate, [Validators.required]],
      endDate: [calendar.endDate, [Validators.required]],
      details: [
        calendar.details,
        [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
      ],
    });
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  getClassNameValue(category: string) {
    let className;

    if (category === 'work') className = 'fc-event-success';
    else if (category === 'personal') className = 'fc-event-warning';

    return className;
  }

  firstElement(index: number): boolean {
    return index === 0;
  }
}
