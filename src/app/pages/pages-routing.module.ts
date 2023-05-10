import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './finances/finances.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';



const routes: Routes = [
  {
    path: "finances",
    component: FinancesComponent,
  },
  {
    path: 'report',
    component: ReportsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
