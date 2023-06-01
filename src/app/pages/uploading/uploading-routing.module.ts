import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadingComponent } from './uploading.component';

const routes: Routes = [
  {
    path:'',
    component: UploadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadingRoutingModule { }
