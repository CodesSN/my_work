
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() title = '';
  @Output() sendFile = new EventEmitter<File|null>();
  public fileUrl:any = null;
  public selectedFile: File | null = null;


  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
    const MAX_SIZE =  5 * 1024 * 1024; // Limite de 5 MB

    if(this.selectedFile && this.selectedFile.size < MAX_SIZE){
      this.sendFile.emit(this.selectedFile);
      this.fileUrl = URL.createObjectURL(this.selectedFile);
    } else {
      this.fileUrl = null;
      this.selectedFile = null;
      this.sendFile.emit(null);

    }
  }
}
