import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  hide = true;
  chide = true;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      const username = this.signUpForm.get('username')?.valid;
      const email = this.signUpForm.get('email')?.valid;
      const password = this.signUpForm.get('password')?.valid;
      const confirmPassword = this.signUpForm.get('cpassword')?.valid;
      const mobile = this.signUpForm.get('mobile')?.valid;

      console.log(username);
      console.log(email);
      console.log(password);
      console.log(confirmPassword);
      console.log(mobile);

    }
  }
}
