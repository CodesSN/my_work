import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UserHomeComponent } from './user-home/user-home.component';


@NgModule({
  declarations: [
    UserHomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule
  ]
})
export class UserModule { }
