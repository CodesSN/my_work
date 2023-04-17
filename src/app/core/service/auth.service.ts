import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { use } from 'echarts';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private emailVerified!: boolean;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.emailVerified = false;
  }

  signUp(username:string, email: string, password:string, number:string){
    return Auth.signUp({
      username,
      password,
      attributes: {
        email,
        nickname: username,
        phone_number: `+52${number}`
      },
    });
  }

  // SignIn
  signIn(username:string, password:string) {
    return Auth.signIn(username, password);
  }

  currentUser() {
    return Auth.currentAuthenticatedUser()
  }

  // Verificaction
  confirmVerification(code:string):Observable<any> {
    const user:any = this.getSaveUser();

    return new Observable(observer => {
      Auth.confirmSignUp(user.username, code).then(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
        );
      });
  }

  resendValidateCode(): Observable<any>{
    const user:any = this.getSaveUser();
    return new Observable(observer => {
      Auth.resendSignUp(user.username).then(
        (response) => {
          observer.next(response)
          observer.complete()
        },
        (error) => {
          observer.error(error);
        }
        )
      });
  }



  saveUser(token:string, email:string = '', username:string = ''){
    const newUser: User =  {
      token: token,
      email: email,
      username: username
    }
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  getSaveUser(){
    let user:any = localStorage.getItem('user');
    if(user){
      user = JSON.parse(user);
    }
    console.log(user);
    return user;
  }

  deleteSaveUser(){
    localStorage.removeItem('user');
  }

  isLogged(){
    const user = this.getSaveUser();
    if(user){
      return true;
    }
    return false;
  }


  // login(username: string, password: string) {
  //   return this.http
  //     .post<User>(`${environment.apiUrl}/authenticate`, {
  //       username,
  //       password,
  //     })
  //     .pipe(
  //       map((user) => {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes

  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //         return user;
  //       })
  //     );
  // }

  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(this.currentUserValue);
  //   return of({ success: false });
  // }
}
