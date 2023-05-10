import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { trucks } from '../../../models/assets.model';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EmployeeService } from 'src/app/human-resources/employee.service';
import { Employee } from 'src/app/models/employee.model';

export interface DialogData {
  id: number;
  action: string;
  trucks: trucks;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  trucksForm?: UntypedFormGroup;
  trucks: trucks;
  id: number;
  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions!: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder,
    private employeeService: EmployeeService
  ) {
    this.id = data.trucks.id;
    this.trucks = data.trucks;
    this.trucksForm = this.createTrucksForm();
  }
  async ngOnInit() {
    this.options = await this.employeeService.getAllEmployeesAuto();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option:string) => option.toLowerCase().includes(filterValue));
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
      barber: [this.trucks.barber],
    });
  }
  async delete() {
    const url =
      'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/assets/delete';
    const data = {
      id: this.data.trucks.id,
    };
    const config: AxiosRequestConfig = {
      method: 'delete',
      maxBodyLength: Infinity,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    try {
      await axios.request(config);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  async submit() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      data.body.forEach((e) => {
        if ((e as Employee).name === this.trucksForm?.value.barber)
          localStorage.setItem('id_barber', (e as Employee).id.toString());
      });
    });
    const x = parseInt(localStorage.getItem('id_barber') as string);
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
      Barber: x,
    };

    const url =
      'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/assets/update_assets';
    const config: AxiosRequestConfig = {
      method: 'put',
      maxBodyLength: Infinity,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    try {
      await axios.request(config);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
}
