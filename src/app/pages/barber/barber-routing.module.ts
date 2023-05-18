import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AssetsComponent } from './assets/assets.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FinancesComponent } from './finances/finances.component';
import { ReportsComponent } from './reports/reports.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RaitingsComponent } from './raitings/raitings.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "assets",
    component: AssetsComponent
  },
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: "finances",
    component: FinancesComponent
  },
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "notifications",
    component: NotificationsComponent
  },
  {
    path: "rating",
    component: RaitingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarberRoutingModule { }
