import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarberService } from 'src/app/core/service/barber.service';
import { BarberFiles } from 'src/app/models/barber.model';
import { EmployeeService } from '../human-resources/employee.service';
import { UpdatedUser } from 'src/app/models/employee.model';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss']
})
export class UploadingComponent implements OnInit {
  public barberInfoForm!: FormGroup;
  public barberFilesForm!: FormGroup;
  public uploading = false;

  constructor(
    private fb: FormBuilder,
    private barberService: BarberService,
    private employeeService: EmployeeService
  ){}


  // Funcion para crear el reactiveform
  private createForms(){
    this.barberInfoForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      date: ['', [Validators.required]],
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

  async getInfoBar(){
    const id = await this.employeeService.getIDEmployee();
    this.employeeService.getEmployeeData(id).subscribe(response => {
      if(response.statusCode === 200){
        this.uploading = response.body.upload;
      }
    });
  }

  ngOnInit(){
    this.createForms();
    this.getInfoBar();
  }
  // Obtiene el archivo de los input
  getFile(file:File|null, text:string){
    this.barberFilesForm.get(text)?.setValue(file);
  }
  // Sube la informacion de un usuario
  async submitBarberInfo(){
    const sub = this.employeeService.getSub();
    const id = await this.employeeService.getIDEmployee();
    if(this.barberFilesForm.valid && this.barberInfoForm.valid){
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
        const paramsFiles:BarberFiles = {
          bank_Account: bankAccountImg,
          barber_License: barberLicenseImg,
          barber_Driver_License: driverLicenseImg,
          deposit_Instructions: directDepositImg,
          social_Security_Card: socialSecurityImg,
          fileName: sub,
          id: id
        }
        this.barberService.uploadBarberFiles(paramsFiles).subscribe(response => {
          console.log(response);
        });
      } catch (error) {
        console.log(error);
      }
      const name = this.barberInfoForm.get('name')?.value;
      const lastName = this.barberInfoForm.get('lastName')?.value;
      const address = this.barberInfoForm.get('address')?.value;
      const date = this.barberInfoForm.get('date')?.value;
      const civil = this.barberInfoForm.get('civil')?.value;
      const ssn = this.barberInfoForm.get('ssn')?.value;
      const gender = this.barberInfoForm.get('gender')?.value;
      const barberInfo:UpdatedUser = {
        id:id,
        name: name,
        last_name: lastName,
        address: address,
        civil_status: civil,
        date: date,
        ssn: ssn,
        gender: gender
      };
      this.barberService.uploadBarberInfo(barberInfo).subscribe(response => {
        console.log(response);
      })
    }
  }
}
