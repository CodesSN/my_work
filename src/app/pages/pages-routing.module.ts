import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsPageComponent } from './reports-page/reports-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'report', pathMatch: 'full' },
  {
    path: 'report',
    component: ReportsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
