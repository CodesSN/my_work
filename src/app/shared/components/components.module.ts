import { NgModule } from "@angular/core";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { SharedModule } from "../shared.module";
import { TableComponent } from './table/table.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { ModalComponent } from './modal/modal.component';
import { EditComponent } from "./edit_assets/edit.component";
import { AddComponent } from "./add_assets/add.component";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ModalFullViewComponent } from './gallery/modal-full-view/modal-full-view.component';
import { NgImageFullscreenViewModule } from "ng-image-fullscreen-view";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ImgContainerComponent } from './img-container/img-container.component';
import { KpiComponent } from './kpi/kpi.component';

@NgModule({
  declarations: [
    FileUploadComponent,
    BreadcrumbComponent,
    TableComponent,
    ModalComponent,
    EditComponent,
    AddComponent,
    SnackbarComponent,
    ModalFullViewComponent,
    CalendarListComponent,
    BannerComponent,
    CardComponent,
    ImgContainerComponent,
    KpiComponent,
  ],
  imports: [
    SharedModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgImageFullscreenViewModule,
    MatInputModule,
    MatTabsModule
  ],
  exports: [
    FileUploadComponent,
    BreadcrumbComponent,
    TableComponent,
    CalendarListComponent,
    BannerComponent,
    CardComponent,
    ImgContainerComponent,
    KpiComponent
  ],
})
export class ComponentsModule {}
