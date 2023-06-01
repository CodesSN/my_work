import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmployeeService } from '../../human-resources/employee.service';
import { id } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-mfa',
  templateUrl: './mfa.component.html',
  styleUrls: ['./mfa.component.scss']
})
export class MfaComponent implements OnInit {
  public mfaForm!: FormGroup;
  public incorrectCode!: boolean;
  public user!: any;
  private userType!: string;
  private approved!: string;

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
      // Obtener el id del usuario
      const id = await this.employeeService.getIDEmployee();
      // Response para traer la informacion del empleado
      this.employeeService.getEmployeeData(id).subscribe(response => {
        if(response.statusCode === 200){
          console.log(response.body);
          this.userType = response.body.id_role;
          this.approved = response.body.approved;
          console.log(this.userType);
          console.log(this.approved);

          this.authService.deleteCurrentUser();
          this.authService.deleteForgotEmail();
          this.authService.deleteNewUser();
          this.authService.saveToken('token');

          switch(this.userType) {
            case '1':
              this.router.navigate(['/dashboard']);
              break;
            case '2':

              this.router.navigate(['/barber/home']);
              break;
            case '3':
              this.router.navigate(['/barber/home']);
              break;
            default:
              this.router.navigate(['/barber/home']);
          }
        }
      });




    }
  }
}
