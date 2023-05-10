import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './finances/finances.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { RatingComponent } from './rating/rating.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: 'finances',
    component: FinancesComponent,
  },
  {
    path: 'report',
    component: ReportsPageComponent,
  },
  {
    path: 'rating',
    component: RatingComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
