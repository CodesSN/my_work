import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email],
      ],
    });
  }

  async onSubmit() {
    if(this.forgotForm.valid){
      const email = this.forgotForm.get('email')?.value;
      console.log(email);
      try {
        const res = await this.authService.forgotPassword(email);
        console.log(res);
        this.authService.saveForgotEmail(email);
        this.router.navigate(['/authentication/new-password'])
      } catch (error) {
        console.error(error);
      }
    }
  }
}
