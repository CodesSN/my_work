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

@NgModule({
  declarations: [
    FileUploadComponent,
    BreadcrumbComponent,
    TableComponent,
    ModalComponent,
    EditComponent,
    AddComponent
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
  ],
  exports: [
    FileUploadComponent,
    BreadcrumbComponent,
    TableComponent,

  ],
})
export class ComponentsModule {}
