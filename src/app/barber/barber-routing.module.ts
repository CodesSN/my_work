import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from '../extra-pages/profile/profile.component';
import { AssetsComponent } from './assets/assets.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FinanceComponent } from './finance/finance.component';
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
    path: "finance",
    component: FinanceComponent
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
    path: "raiting",
    component: RaitingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarberRoutingModule { }
