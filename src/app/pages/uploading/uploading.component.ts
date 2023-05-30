import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarberService } from 'src/app/core/service/barber.service';
import { BarberFiles } from 'src/app/models/barber.model';
import { EmployeeService } from '../human-resources/employee.service';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss']
})
export class UploadingComponent implements OnInit {
  barberInfoForm!: FormGroup;
  barberFilesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private barberService: BarberService,
    private employeeService: EmployeeService
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
    })

    this.barberFilesForm = this.fb.group({
      driverLicense: ['', [Validators.required]],
      socialSecurity: ['', [Validators.required]],
      bankAccount: ['', [Validators.required]],
      directDeposit:  ['', [Validators.required]],
      barberLicense:  ['', [Validators.required]],
    });


  }

  ngOnInit(): void {
    this.createForms();
  }
  // Obtiene el archivo de los input
  getFile(file:File|null, text:string){
    this.barberFilesForm.get(text)?.setValue(file);
  }

  // Sube la informacion de un usuario
  async submitBarberInfo(){
    if(this.barberFilesForm.valid && this.barberInfoForm.valid){
      const sub = this.employeeService.getSub();
      // Obtener los valores del formulario de cada valor
      const driverLicense = this.barberFilesForm.get('driverLicense')?.value;
      const socialSecurity = this.barberFilesForm.get('socialSecurity')?.value;
      const bankAccount = this.barberFilesForm.get('bankAccount')?.value;
      const directDeposit = this.barberFilesForm.get('directDeposit')?.value;
      const barberLicense = this.barberFilesForm.get('barberLicense')?.value;
      // Se convierte los archivos en string base 64, ya que asi se guardan en la base de datos
      try {
        const driverLicenseImg = await this.barberService.readFileAsync(driverLicense as File);
        const socialSecurityImg = await this.barberService.readFileAsync(socialSecurity as File);
        const bankAccountImg = await this.barberService.readFileAsync(bankAccount as File);
        const directDepositImg = await this.barberService.readFileAsync(directDeposit as File);
        const barberLicenseImg = await this.barberService.readFileAsync(barberLicense as File);
        const params:BarberFiles = {
          bank_Account: bankAccountImg,
          barber_License: barberLicenseImg,
          barber_Driver_License: driverLicenseImg,
          deposit_Instructions: directDepositImg,
          social_Security_Card: socialSecurityImg,
          fileName: sub
        }

        console.log(params);


        this.barberService.uploadBarberFiles(params).subscribe(response => {
          console.log(response);
        });



      } catch (error) {
        console.log(error);
      }







    }
    // console.log(this.barberInfoForm.getRawValue());
    // console.log(this.barberFilesForm.getRawValue());
  }

}
