import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadingRoutingModule } from './uploading-routing.module';
import { UploadingComponent } from './uploading.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UploadingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UploadingRoutingModule,
    ComponentsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class UploadingModule { }
