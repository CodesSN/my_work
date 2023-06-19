import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { SelectAppointmentComponent } from './select-appointment/select-appointment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'barber',
    pathMatch: 'full',
  },
  {
    path: 'barber',
    component: AppointmentsComponent
  },
  {
    path: 'select/:id',
    component: SelectAppointmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
