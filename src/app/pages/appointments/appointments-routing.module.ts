import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { SelectAppointmentComponent } from './select-appointment/select-appointment.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'barber',
    pathMatch: 'full',
  },
  {
    path: 'view',
    component: AppointmentViewComponent
  },
  {
    path: 'form',
    component: FormComponent
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
