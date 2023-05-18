import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {
  verifyForm: FormGroup = new FormGroup('');
  requiredCode: boolean | undefined = false;
  invalidResendCode: boolean | undefined = false;
  invalidCode: boolean | undefined = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.verifyForm = this.fb.group({
      code: ['', Validators.required],
    });
  }

  async onSubmit(){
    this.requiredCode = this.verifyForm.get('code')?.invalid;
    if(this.verifyForm.valid){
      const user = this.authService.getNewUser()
      const code =  this.verifyForm.get('code')?.value;
      this.invalidCode = false;
      try {
        await this.authService.confirmVerification(user.username, code);
        this.authService.deleteNewUser();
        this.router.navigate(['/authentication/signin']);
      } catch (error) {
        this.invalidCode = true;
      }
    }
  }

  async resendCode(){
    this.invalidResendCode = false;
    const user = this.authService.getNewUser();
    try {
      await this.authService.resendValidateCode(user.username);
    } catch (error) {
      this.invalidResendCode = true;
    }
  }


}
