import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAppointmentComponent } from './select-appointment/select-appointment.component';


@NgModule({
  declarations: [
    AppointmentsComponent,
    SelectAppointmentComponent,
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    ComponentsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AppointmentsModule { }
