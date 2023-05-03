import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  public newPassForm!: FormGroup;
  public invalidCode!: boolean;
  public email!:string | null;

  constructor(
    private authService:AuthService,
    private fb: FormBuilder,
    private router: Router
  ){
    this.invalidCode = false;
    this.email = this.authService.getForgotEmail();
  }

  ngOnInit(): void {
    this.newPassForm = this.fb.group({
      code: ['', Validators.required],
      nwpass: ['', Validators.required]
    })
  }

  async onSubmit(){
    if(this.newPassForm.valid){
      const code = this.newPassForm.get('code')?.value;
      const newPassword = this.newPassForm.get('nwpass')?.value;

      if(this.email){
        this.invalidCode = false;
        try {
          await this.authService.forgotPasswordSubmit(this.email, code, newPassword);
          this.authService.deleteForgotEmail();
          this.router.navigate(['/authentication/signin'])
        } catch (error) {
          this.invalidCode = true;
        }

      }
    }
  }
}
