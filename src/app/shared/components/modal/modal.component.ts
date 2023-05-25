import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/pages/human-resources/employee.service';
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
  public fileControl = new FormControl();
  public selectedFile: File | null = null;
  public fileUrl:any = null;
  public file:File | null = null;

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
      ssn: [this.currentEmployee.ssn, [Validators.required]],
      gender: ['male'],
      description: ['', [Validators.required]],
    })
  }

  close(): void {
    this.dialogRef.close();
  }

saveChanges(){
    if(this.modalForm.valid){
      const updatedUser: Employee = {
        id: this.currentEmployee.id,
        name: this.modalForm.get('name')?.value,
        address: this.modalForm.get('address')?.value,
        phone: this.modalForm.get('phone')?.value,
        date: this.modalForm.get('date')?.value,
        email: this.modalForm.get('email')?.value,
        civil_status: this.modalForm.get('civil')?.value,
        ssn: this.modalForm.get('ssn')?.value,
        sub: ''
      }

      if(this.data.action === 'add'){
        // console.log("save changes");
        // Logica para añadir un empleado
        try {
           this.employeeService.addEmployee(updatedUser).subscribe(data => {
            if(data.statusCode === 200){
              this.dialogRef.close(true);
            }
          })
        } catch (error) {
          console.error(error);
        }
      }

      if(this.data.action === 'edit'){
        // Logica para editar un empleado
        try {
          this.employeeService.saveEmployee(updatedUser).subscribe(data => {
            if(data.statusCode === 200){
              // Cambiarlo por actualizar informacion automaticamente
              this.dialogRef.close(true);
            }
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

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
