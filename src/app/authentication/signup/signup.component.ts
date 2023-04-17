import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  invalidConfirmPassword: boolean | undefined  = false;
  signUpForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', Validators.required],
      cpassword: [
        '',
        [Validators.required, this.passwordConfirming]
      ],
      mobile: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      ]
    });
  }

  private passwordConfirming(control: AbstractControl): any {
    if (control && control.parent) {
      const password = control.parent.get('password');
      const confirmPassword = control.parent.get('cpassword');
      if (!password || !confirmPassword) {
        return null;
      }
      return password.value === confirmPassword.value ? null : { passwordNotMatch: true };
    }
    return null;
  }

  async onSubmit() {
    if (this.signUpForm.valid) {
      const username = this.signUpForm.get('username')?.value;
      const email = this.signUpForm.get('email')?.value;
      const password = this.signUpForm.get('password')?.value;
      const mobile = this.signUpForm.get('mobile')?.value;
      try {
        this.authService.signUp(username, email, password, mobile);
        this.authService.saveUser('', '', username);
        console.log(this.authService.getSaveUser());
        this.router.navigate(['authentication/verification']);
      } catch (error) {
        console.error(error)
      }
    }
  }
}
