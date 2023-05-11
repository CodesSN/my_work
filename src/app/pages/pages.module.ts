import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancesComponent } from './finances/finances.component';
import { PagesRoutingModule } from './pages-routing.module';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from '../shared/shared.module';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { RatingComponent } from './rating/rating.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { EmailRoutingModule } from '../email/email-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    FinancesComponent,
    RatingComponent,
    ReportsPageComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    NgChartsModule,
    NgApexchartsModule,
    NgScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatCheckboxModule,
    DragDropModule,
    MatProgressBarModule,
    ComponentsModule,
    SharedModule,
    EmailRoutingModule,
    MatCheckboxModule,
    CKEditorModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
