import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarberRoutingModule } from './barber-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AssetsComponent } from './assets/assets.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FinanceComponent } from './finance/finance.component';
import { ReportsComponent } from './reports/reports.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RaitingsComponent } from './raitings/raitings.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    AssetsComponent,
    CalendarComponent,
    FinanceComponent,
    ReportsComponent,
    NotificationsComponent,
    RaitingsComponent
  ],
  imports: [
    CommonModule,
    BarberRoutingModule,
    SharedModule,
    MatIconModule,
    MatTabsModule,
    ComponentsModule,
  ]
})
export class BarberModule { }
