import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mfa',
  templateUrl: './mfa.component.html',
  styleUrls: ['./mfa.component.scss']
})
export class MfaComponent implements OnInit {
  public mfaForm!: FormGroup;
  public incorrectCode!: boolean;

  constructor(
    private fb:FormBuilder
  ) {
    this.incorrectCode = false;
  }

  ngOnInit(): void {
    this.mfaForm = this.fb.group({
      code: ['', Validators.required],
    })
  }

  onSubmit(){
    const code = this.mfaForm.get('code')?.value;
    this.incorrectCode = false;


  }
}
