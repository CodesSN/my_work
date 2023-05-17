import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  imageObject: string;
  currentIndex: any;
}

@Component({
  selector: 'app-modal-full-view',
  templateUrl: './modal-full-view.component.html',
  styleUrls: ['./modal-full-view.component.scss']
})
export class ModalFullViewComponent {
public imageObject:any;
public currentIndex:any;
showFlag = true;
constructor(
  public dialogRef: MatDialogRef<ModalFullViewComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  this.currentIndex = data.currentIndex;
  this.imageObject = data.imageObject;
}

closeEventHandler() {
  this.showFlag = false;
  this.currentIndex = -1;
  this.dialogRef.close();
}
}
