import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-mfa',
  templateUrl: './mfa.component.html',
  styleUrls: ['./mfa.component.scss']
})
export class MfaComponent implements OnInit {
  public mfaForm!: FormGroup;
  public incorrectCode!: boolean;

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.incorrectCode = false;
  }

  ngOnInit(): void {
    this.mfaForm = this.fb.group({
      code: ['', Validators.required],
    })
  }

  async onSubmit(){
    if(this.mfaForm.valid) {
      this.incorrectCode = false;
      const code = this.mfaForm.get('code')?.value;
      const user = this.authService.getCurrentUser();
      console.log(code);
      console.log(user)
      localStorage.removeItem('user');
      localStorage.setItem('user', user.username);
      this.authService.deleteCurrentUser();
      this.authService.deleteForgotEmail();
      this.authService.deleteNewUser();
      this.authService.saveToken('token');
      this.router.navigate(['/dashboard']);

      // try {
      //   // await this.authService.signOut();
      //   // const res = await this.authService.confirmVerification(user, code);

      //   // console.log(res);


      // } catch (error) {
      //   console.error(error);
      //   this.incorrectCode = true;
      // }
    }
  }
}
