import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarberRoutingModule } from './barber-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AssetsComponent } from './assets/assets.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FinancesComponent } from './finances/finances.component';
import { ReportsComponent } from './reports/reports.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RaitingsComponent } from './raitings/raitings.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormDialogComponent } from './calendar/form-dialog/form-dialog.component';
import { CalendarService } from '../../core/service/calendar.service';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SocialModalComponent } from './profile/social-modal/social-modal.component';
import { ProfileImgComponent } from './profile/profile-img/profile-img.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormWorkingTimeComponent } from './calendar/form-working-time/form-working-time.component';
import { ViewNotificationComponent } from './notifications/view-notification/view_notification.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    AssetsComponent,
    CalendarComponent,
    FinancesComponent,
    ReportsComponent,
    NotificationsComponent,
    RaitingsComponent,
    FormDialogComponent,
    SocialModalComponent,
    ProfileImgComponent,
    FormWorkingTimeComponent,
    ViewNotificationComponent
  ],
  imports: [
    CommonModule,
    BarberRoutingModule,
    SharedModule,
    MatIconModule,
    ComponentsModule,
    MatTabsModule,
    MatCheckboxModule,
    FullCalendarModule,
    FullCalendarModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatSidenavModule,
    NgScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatMenuModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DragDropModule,
    MatIconModule,
    MatSnackBarModule,
    NgImageFullscreenViewModule,
    NgApexchartsModule,
    GoogleMapsModule,
  ],
  providers: [CalendarService]
})
export class BarberModule { }
