import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { AppsRoutingModule } from './apps-routing.module';
import { ChatComponent } from './chat/chat.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { SupportComponent } from './support/support.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatRadioModule } from '@angular/material/radio';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
} from '@danielmoncada/angular-datetime-picker';
import { ComponentsModule } from '../../shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ChatComponent,
    DragDropComponent,
    ContactGridComponent,
    SupportComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgScrollbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSnackBarModule,
    DragDropModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSortModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatRadioModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class AppsModule {}
