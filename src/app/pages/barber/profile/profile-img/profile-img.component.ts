import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export interface DialogData {
  tittle: string;
  zone: string;
  sub: any;
}

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styles: [],
})
export class ProfileImgComponent {
  sub: any;
  tittle: any;
  zone: any;
  file: File | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.sub = data.sub;
    this.zone = data.zone;
    this.tittle = (this.zone === 'profile')? 'Choose Your Profile Photo': 'Upload A Photo';
  }

  change(event: any) {
    this.file = event.target.files[0];

  }
  readFileAsync(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Error al leer el archivo'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Error al leer el archivo'));
      };

      reader.readAsDataURL(file);
    });
  }
  async submit() {
    const fileName = this.sub;
    const url =
      'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/profile/user/image/upload';
    const img = await this.readFileAsync(this.file as File);
    const contentType = this.file?.type.toString();
    const data = {
      fileName,
      file: img,
      contentType,
      folderName: (this.zone === 'profile')? 'profile_Image':'gallery_barber',
    };

    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    await axios.request(config);
    window.location.reload();
  }
}
