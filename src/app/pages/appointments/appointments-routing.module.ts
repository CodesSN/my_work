import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { SelectAppointmentComponent } from './select-appointment/select-appointment.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent
  },
  {
    path: 'select',
    component: SelectAppointmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
