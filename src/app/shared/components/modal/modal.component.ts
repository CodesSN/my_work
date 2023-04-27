import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee.model';

export interface DialogData {
  employee: Employee,
  action: "add" | "edit";
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public currentEmployee!: Employee;
  public titleForm!: 'Add Employee'|'Edit Employee';
  public modalForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
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
      email: [this.currentEmployee.email, [Validators.required, Validators.email]],
      civil: [this.currentEmployee.civil_status ,[Validators.required]],
      ssn: [this.currentEmployee.sn, [Validators.required]]
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveChanges(){
    if(this.data.action === 'add'){
      console.log("save changes");
      // Logica para añadir un empleado
    }

    if(this.data.action === 'edit'){
      console.log('edit');
      // Logica para editar un empleado

    }

    this.dialogRef.close()
  }
}
