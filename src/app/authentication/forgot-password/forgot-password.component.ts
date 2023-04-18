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
      forgot: [
        '',
        [Validators.required, Validators.email],
      ],
    });
  }

  async onSubmit() {
    if(this.forgotForm.valid){
      const username = this.forgotForm.get('forgot')?.value;
      console.log(username);
      try {
        const res = await this.authService.forgotPassword(username);
        console.log(res);
        this.authService.saveForgotUsername(username);
        this.router.navigate(['/authentication/new-password'])
      } catch (error) {
        console.error(error);
      }
    }
  }
}
