import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoristRoutingModule } from './monitorist-routing.module';
import { MonitoristComponent } from './monitorist.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    MonitoristComponent
  ],
  imports: [
    CommonModule,
    MonitoristRoutingModule,
    ComponentsModule
  ]
})
export class MonitoristModule { }
