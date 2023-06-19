import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule
  ]
})
export class UserModule { }
