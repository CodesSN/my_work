import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RatingComponent } from './rating/rating.component';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
