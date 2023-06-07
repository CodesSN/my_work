import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoristComponent } from './monitorist.component';
import { MonitoristListComponent } from './monitorist-list/monitorist-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'appointments',
    pathMatch: "full"
  },
  {
    path:'appointments',
    component: MonitoristComponent
  },
  {
    path:'list',
    component: MonitoristListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoristRoutingModule { }
