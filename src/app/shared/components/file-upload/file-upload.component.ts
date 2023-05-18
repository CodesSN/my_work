
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  public selectedFile: File | null = null;
  public fileUrl:any = null;
  public file:File | null = null;
  @Input() title = '';

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];

    if(this.selectedFile){
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile?.name);
      this.fileUrl = URL.createObjectURL(this.selectedFile);
    }
  }

  printFile(){
    console.log(this.fileUrl);
    console.log(this.selectedFile);
  }
}
