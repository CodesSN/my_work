import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { trucks } from '../../../models/assets.model';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios'

export interface DialogData {
  id: number;
  trucks: trucks;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  trucksForm?: UntypedFormGroup;
  trucks: trucks;
  id: number;
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {
    this.id = data.trucks.id;
    this.trucks = data.trucks;
    this.trucksForm = this.createTrucksForm();
  }
  createTrucksForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.trucks.id],
      number: [this.trucks.Anumber],
      type: [this.trucks.Atype],
      plate: [this.trucks.plate],
      code: [this.trucks.code],
      year: [this.trucks.Ayear],
      make: [this.trucks.make],
      model: [this.trucks.model],
      vin: [this.trucks.vin],
      up: [this.trucks.up],
    });
  }
  async submit() {
    const data = {
      id: this.data.trucks.id,
      Anumber: this.trucksForm?.value.number,
      Atype: this.trucksForm?.value.type,
      code: this.trucksForm?.value.code,
      make: this.trucksForm?.value.make,
      model: this.trucksForm?.value.model,
      plate: this.trucksForm?.value.plate,
      vin: this.trucksForm?.value.vin,
      up: this.trucksForm?.value.up,
      Ayear: this.trucksForm?.value.year,
    }
    console.log(data);
    
    const url =
      'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/assets/update_assets';
    const config: AxiosRequestConfig = {
      method: 'put',
      maxBodyLength: Infinity,
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };
    try {
      await axios.request(config);
      window.location.reload()
      
    } catch (error) {
      console.log(error);
      
    }
  }
}
