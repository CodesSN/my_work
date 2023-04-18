import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit
{
  signInForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.signInForm.valid) {
      const username = this.signInForm.get('username')?.value;
      const password = this.signInForm.get('password')?.value;
      try {
        const response = await this.authService.signIn(username, password);

        if(response.signInUserSession === null){
          this.authService.saveCurrentUser(response);
          this.router.navigate(['/authentication/mfa']);
        }
        const user = await this.authService.currentUser();
        console.log(user);


        this.router.navigate(['/authentication/mfa']);
        console.log(user);
      } catch (error:unknown) {
        if (error instanceof Error && error.name === 'UserNotConfirmedException') {
          // console.error("UserNotConfirmed");
          this.router.navigate(['/authentication/verification'])
          this.error = 'User not verificated';
        }

        if (error instanceof Error && error.name === 'NotAuthorizedException') {
          console.error("NotAut");
          this.error = 'Username or password is incorrect';
        }
        this.submitted = false;
        this.loading = false;
      }
    }
  }
}
