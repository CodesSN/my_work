import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmployeeService } from '../../human-resources/employee.service';

@Component({
  selector: 'app-mfa',
  templateUrl: './mfa.component.html',
  styleUrls: ['./mfa.component.scss']
})
export class MfaComponent implements OnInit {
  public mfaForm!: FormGroup;
  public incorrectCode!: boolean;
  public data!: any;
  userType?: string;

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router,
    private employeeService : EmployeeService
  ) {
    this.incorrectCode = false;
  }

  ngOnInit(): void {
    this.mfaForm = this.fb.group({
      code: ['', Validators.required],
    })
  }

  async getData() {
    const user = JSON.parse(
      localStorage.getItem(
        'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.' +
          localStorage.getItem(
            'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.LastAuthUser'
          ) +
          '.userData'
      ) as string
    ).UserAttributes;
    console.log('user',user[0]);
    
    const datos = await this.employeeService.getAllEmployeesAxios();
    let id;
    await datos.forEach((e: any) => {
      if (user[0].Value === e.sub) {
        return (id = e.id);
      }
    });

    return this.employeeService.getdataEmployeebyId(id);
  }

  async onSubmit(){
    if(this.mfaForm.valid) {
      this.incorrectCode = false;
      const code = this.mfaForm.get('code')?.value;
      this.data = await this.getData();
      this.userType = this.data.data.body.id_role;
      this.authService.deleteCurrentUser();
      this.authService.deleteForgotEmail();
      this.authService.deleteNewUser();
      this.authService.saveToken('token');
      if(this.userType === '1'){
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/barber/home']);
      }

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
