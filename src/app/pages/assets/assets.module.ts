import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { ComponentsModule } from "../../shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ContactsModule } from "../../contacts/contacts.module";
import { AssetsRoutingModule } from "./assets-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [
       ConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AssetsRoutingModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatMenuModule,
    ComponentsModule,
    SharedModule,
    ContactsModule,
    HttpClientModule
  ],
})
export class AssetsModule { }
