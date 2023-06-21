import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAppointmentComponent } from './select-appointment/select-appointment.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppointmentsComponent,
    SelectAppointmentComponent,
    AppointmentViewComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    ComponentsModule,
    SharedModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class AppointmentsModule { }
