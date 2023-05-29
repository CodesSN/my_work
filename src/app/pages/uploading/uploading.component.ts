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
  private createForm(){
    this.barberInfoForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      civil: ['' ,[Validators.required]],
      ssn: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

  submitBarberInfo(){

    if(this.barberInfoForm.valid){
      console.log('submit');
    }

  }

}
