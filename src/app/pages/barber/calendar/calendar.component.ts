import { Component, ViewChild, OnInit } from '@angular/core';
import {
  CalendarOptions,
  EventClickArg,
  EventApi,
} from '@fullcalendar/core';
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
import { Calendar } from './calendar.model';
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

  public ngOnInit(): void {
    this.calendarEvents = [];
    this.tempEvents = this.calendarEvents;
    this.calendarOptions.initialEvents = this.calendarEvents;
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
    const dialogRef = this.dialog.open(FormDialogComponent, {
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

  // Llama al modal para crear un nuevo evento
  addNewEvent() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        calendar: this.calendar,
        action: 'add',
      },
    });

    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 'submit') {


        this.calendarData = this.calendarService.getDialogData();
        this.calendarEvents = this.calendarEvents?.concat({
          // add new event data. must create new array
          id: this.calendarData.id,
          title: this.calendarData.title,
          start: this.calendarData.startDate,
          end: this.calendarData.endDate,
          className: this.getClassNameValue(this.calendarData.category),
          groupId: this.calendarData.category,
          details: this.calendarData.details,
        });
        console.log(this.calendarData);
        console.log("events: ", this.calendarEvents);


        this.calendarOptions.events = this.calendarEvents;
        this.addCusForm.reset();
        this.showNotification(
          'snackbar-success',
          'Add Record Successfully...!!!',
          'bottom',
          'center'
        );
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

  eventClick(row: EventClickArg) {
    console.log(row.event.id);
    console.log(row.event.title);
    console.log(row.event.groupId);
    console.log(row.event.start);
    console.log(row.event.end);
    console.log(row.event.extendedProps['details']);


    const calendarData = {
      id: row.event.id,
      title: row.event.title,
      category: row.event.groupId,
      startDate: row.event.start,
      endDate: row.event.end,
      details: row.event.extendedProps['details'],
    };


    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        calendar: calendarData,
        action: 'edit',
      },
    });

    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 'submit') {
        this.calendarData = this.calendarService.getDialogData();
        this.calendarEvents?.forEach((element, index) => {
          if (this.calendarData.id === element.id) {
            this.editEvent(index, this.calendarData);
          }
        }, this);
        this.showNotification(
          'black',
          'Edit Record Successfully...!!!',
          'bottom',
          'center'
        );
        this.addCusForm.reset();
      } else if (result === 'delete') {
        this.calendarData = this.calendarService.getDialogData();
        this.calendarEvents?.forEach((element) => {
          if (this.calendarData.id === element.id) {
            row.event.remove();
          }
        }, this);

        this.showNotification(
          'snackbar-danger',
          'Delete Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
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
}
