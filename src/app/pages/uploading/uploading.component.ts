import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss']
})
export class UploadingComponent implements OnInit {
  barberInfoForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ){}
  // Funcion para crear el reactiveform
  private createForms(){
    this.barberInfoForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      civil: ['' ,[Validators.required]],
      ssn: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      driverLicense: ['', [Validators.required]],
      socialSecurity: ['', [Validators.required]],
      bankAccount: ['', [Validators.required]],
      directDeposit:  ['', [Validators.required]],
      barberLicense:  ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.createForms();
  }
  // Obtiene el archivo de los input
  getFile(file:File|null, text:string){
    this.barberInfoForm.get(text)?.setValue(file);
  }

  // Sube la informacion de un usuario
  submitBarberInfo(){
    if(this.barberInfoForm.valid){
      // Validacion del formulario
    }



  }

}
