import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/pages/human-resources/employee.service';
import { Employee } from 'src/app/models/employee.model';
import { AuthService } from 'src/app/core/service/auth.service';

export interface DialogData {
  employee: Employee;
  action: 'add' | 'edit';
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public currentEmployee!: Employee;
  public titleForm!: 'Add Employee' | 'Edit Employee';
  public modalForm!: FormGroup;
  public fileControl = new FormControl();
  public selectedFile: File | null = null;
  public fileUrl: any = null;
  public file: File | null = null;
  public roles: any = [];
public civil_status:any = ['Single','merried','separated','divorced']
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private authService: AuthService
  ) {
    if (this.data.action === 'add') {
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
      email: [
        this.currentEmployee.email,
        [Validators.required, Validators.email],
      ],
      civil: [this.currentEmployee.civil_status, [Validators.required]],
      ssn: [this.currentEmployee.ssn, [Validators.required]],
      role: [this.currentEmployee.id_role, [Validators.required]],
      gender: ['male'],
      description: ['', [Validators.required]],
    });
    this.employeeService.getRoles().subscribe((data) => {
      this.roles = data.body;
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  async saveChanges() {
    if (this.modalForm.valid) {
      const updatedUser: Employee = {
        id: this.currentEmployee.id,
        name: this.modalForm.get('name')?.value,
        address: this.modalForm.get('address')?.value,
        phone: this.modalForm.get('phone')?.value,
        date: this.modalForm.get('date')?.value,
        email: this.modalForm.get('email')?.value,
        civil_status: this.modalForm.get('civil')?.value,
        ssn: this.modalForm.get('ssn')?.value,
        id_role: this.modalForm.get('role')?.value,
        social_link: [],
        sub: '',
        upload: false,
      };

      if (this.data.action === 'add') {
        // console.log("save changes");
        // Logica para añadir un empleado
        try {
          const password = await this.generarPassword();
          const user = await this.authService.signUp(
            updatedUser.name,
            updatedUser.email,
            password,
            updatedUser.phone
          );
          alert('this is the temporary password: ' + password);
          updatedUser.sub = user.userSub;
          this.employeeService.addEmployee(updatedUser).subscribe((data) => {
            if (data.statusCode === 200) {
              this.dialogRef.close(true);
            }
          });
        } catch (error) {
          console.error(error);
        }
      }

      if (this.data.action === 'edit') {
        // Logica para editar un empleado
        try {
          this.employeeService.saveEmployee(updatedUser).subscribe((data) => {
            if (data.statusCode === 200) {
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
  async generarPassword() {
    const caracteresEspeciales = '!@#$%^&*()_+=-{}[]|:<>?,.';
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const caracteresPermitidos =
      caracteresEspeciales + letrasMayusculas + letrasMinusculas + numeros;
    const longitudMinima = 8;

    let password = '';

    // Generar el carácter especial
    const caracterEspecial =
      caracteresEspeciales[
        Math.floor(Math.random() * caracteresEspeciales.length)
      ];
    password += caracterEspecial;

    // Generar la letra mayúscula
    const letraMayuscula =
      letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)];
    password += letraMayuscula;

    // Generar la letra minúscula
    const letraMinuscula =
      letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    password += letraMinuscula;

    // Generar el número
    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    password += numero;

    // Generar el resto de caracteres
    for (let i = 0; i < longitudMinima - 4; i++) {
      const caracter =
        caracteresPermitidos[
          Math.floor(Math.random() * caracteresPermitidos.length)
        ];
      password += caracter;
    }

    return password;
  }
  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile?.name);
      this.fileUrl = URL.createObjectURL(this.selectedFile);
    }
  }

  printFile() {
    console.log(this.fileUrl);
    console.log(this.selectedFile);
  }
}
