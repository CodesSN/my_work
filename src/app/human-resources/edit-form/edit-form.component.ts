import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';

export interface DialogData {
  employee: Employee,
  action: "add" | "edit";
}


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})

export class EditFormComponent implements OnInit {
  public currentEmployee!: Employee;
  public titleForm!: 'Add Employee'|'Edit Employee';
  public modalForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    if(this.data.action === 'add'){
      this.titleForm = 'Add Employee';
    } else {
      this.titleForm = 'Edit Employee';
    }
    this.currentEmployee = data.employee;
  }

  ngOnInit(): void {
    this.modalForm = this.fb.group({
      name: [this.currentEmployee.name, [Validators.required]],
      address: [this.currentEmployee.address, [Validators.required]],
      phone: [this.currentEmployee.phone, [Validators.required]],
      date: [this.currentEmployee.date, [Validators.required]],
      email: [this.currentEmployee.email, [Validators.required]],
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveChanges(){
    if(this.data.action === 'add'){
      console.log("save changes");
      // Logica para añadir un empleado
      this.employeeService.addEmployee('1');
    }

    if(this.data.action === 'edit'){
      console.log('edit');
      // Logica para editar un empleado
      this.employeeService.saveEmployee('2');

    }
  }
}
