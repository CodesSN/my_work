import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoristRoutingModule } from './monitorist-routing.module';
import { MonitoristComponent } from './monitorist.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MonitoristListComponent } from './monitorist-list/monitorist-list.component';


@NgModule({
  declarations: [
    MonitoristComponent,
    MonitoristListComponent
  ],
  imports: [
    CommonModule,
    MonitoristRoutingModule,
    ComponentsModule
  ]
})
export class MonitoristModule { }
