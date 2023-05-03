import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/human-resources/employee.service';
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
    private employeeService: EmployeeService,
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
      ssn: [this.currentEmployee.ssn, [Validators.required]]
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  async saveChanges(){
    const updatedUser: Employee = {
      id: this.currentEmployee.id,
      name: this.modalForm.get('name')?.value,
      address: this.modalForm.get('address')?.value,
      phone: this.modalForm.get('phone')?.value,
      date: this.modalForm.get('date')?.value,
      email: this.modalForm.get('email')?.value,
      civil_status: this.modalForm.get('civil')?.value,
      ssn: this.modalForm.get('ssn')?.value
    }

    if(this.data.action === 'add'){
      // console.log("save changes");
      // Logica para añadir un empleado
      try {
        await this.employeeService.addEmployee(updatedUser).subscribe(data => {
          if(data.statusCode){
            location.reload();
            console.log(data);
          }
        })
      } catch (error) {
        console.error(error);

      }
    }

    if(this.data.action === 'edit'){
      // Logica para editar un empleado
      try {
        await this.employeeService.saveEmployee(updatedUser).subscribe(data => {
          if(data.statusCode === 200){
            // Cambiarlo por actualizar informacion automaticamente
            location.reload();
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
    this.dialogRef.close()
  }
}
