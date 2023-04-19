import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'aws-amplify';
import { CurrentUser, User } from '../../models/user.model';
import { Router } from '@angular/router';

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

  // MFA
  multifactorVerification(username:string, code:string){
    return Auth.confirmSignIn(username, code);
  }

  signOut(){
    return Auth.signOut();
  }

  currentUser() {
    return Auth.currentAuthenticatedUser()
  }

  // Verificaction
  confirmVerification(user:any ,code:string) {
    return Auth.confirmSignUp(user, code);
  }

  resendValidateCode(username:string){
    return Auth.resendSignUp(username);
  }

  forgotPassword(email:string){
    return Auth.forgotPassword(email);
  }

  forgotPasswordSubmit(username:string, code:string, newPassword:string){
    return Auth.forgotPasswordSubmit(username, code,  newPassword)
  }

  saveNewUser(username:string){
    const newUser: User =  {
      username: username
    }
    localStorage.setItem('new', JSON.stringify(newUser))
  }

  getNewUser(){
    let user:any = localStorage.getItem('new');
    if(user){
      user = JSON.parse(user);
    }
    return user;
  }

  deleteNewUser(){
    localStorage.removeItem('new');
  }

  saveCurrentUser(user:any){
    localStorage.setItem('current', JSON.stringify(user));
  }

  getCurrentUser(){
    let user:any = localStorage.getItem('current');
    if(user){
      user = JSON.parse(user);
    }
    return user;
  }

  deleteCurrentUser(){
    localStorage.removeItem('current');
  }

  saveForgotEmail(email:string){
    localStorage.setItem('forgot', email);
  }

  getForgotEmail(){
    const username:string | null = localStorage.getItem('forgot');
    return username;
  }

  deleteForgotEmail(){
    localStorage.removeItem('forgot');
  }
}
