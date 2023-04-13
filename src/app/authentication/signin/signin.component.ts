import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
export class SigninComponent
  implements OnInit
{
  signInForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['pavel', Validators.required],
      password: ['Pavel.12345', Validators.required],
    });
  }

  onSubmit() {
    // this.submitted = true;
    // this.loading = true;
    this.error = '';
    if (this.signInForm.valid) {
      const username = this.signInForm.get('username')?.value;
      const password = this.signInForm.get('password')?.value;

      this.authService.signIn(username, password);


      // console.log("Signin", this.authService.getValue());


      // .subscribe(
      //   (user) => {
      //     // Por lo pronto direccionar
      //     this.router.navigate(['dashboard'])
      //     console.log(user)
      //   },
      //   (error) => {
      //     // this.invalidInput = true ;
      //     this.error = "Incorrect username or password";
      //     console.error(error);
      //   }
      //   );


    }
  }
}
