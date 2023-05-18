import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { link } from 'src/app/models/link.model';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  data: any;
}
@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html',
  styleUrls: ['./social-modal.component.scss'],
})
export class SocialModalComponent {
  linkForm?: UntypedFormGroup;
  instagram: link;
  id: any;
  constructor(private fb: UntypedFormBuilder,@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.instagram = { instagram_Link: '' };
    this.linkForm = this.createLinkForm();
    this.id = data.data.id
  }
  createLinkForm(): UntypedFormGroup {
    return this.fb.group({
      instagram: [this.instagram.instagram_Link],
    });
  }
  async submit() {
    console.log(this.linkForm?.value.instagram);
    const data = {
      name: this.data.data.name,
      email: this.data.data.email,
      address: this.data.data.address,
      phone: this.data.data.phone,
      civil_status: this.data.data.civil_status,
      date: this.data.data.date,
      ssn: this.data.data.ssn,
      social_links: [this.linkForm?.value.instagram]
    };
    const url =
      'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/employee/'+ this.id;
    const config: AxiosRequestConfig = {
      method: 'put',
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
