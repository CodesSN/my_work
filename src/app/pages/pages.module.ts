import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RatingComponent } from './rating/rating.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    NgApexchartsModule
  ]
})
export class PagesModule { }
