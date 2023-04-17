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

  signOut(){
    return Auth.signOut();
  }

  currentUser() {
    return Auth.currentAuthenticatedUser()
  }

  // Verificaction
  confirmVerification(username:string ,code:string) {
    return Auth.confirmSignUp(username, code);
  }


  resendValidateCode(username:string){
    Auth.resendSignUp(username);
  }

  saveUser(token:string, email:string, username:string){
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
}
