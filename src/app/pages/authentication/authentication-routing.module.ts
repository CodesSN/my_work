import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { Page404Component } from "./page404/page404.component";
import { VerificationComponent } from "./verification/verification.component";
import { MfaComponent } from "./mfa/mfa.component";
import { NewPasswordComponent } from "./new-password/new-password.component";
import { MfaGuard } from "../../core/guard/mfa.guard";
import { ForgotGuard } from "../../core/guard/forgot.guard";
const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full",
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "verification",
    component: VerificationComponent
  },
  {
    path: "mfa",
    component: MfaComponent,
    canActivate: [MfaGuard]
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "new-password",
    component: NewPasswordComponent,
    canActivate: [ForgotGuard]
  },
  {
    path: "page404",
    component: Page404Component,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
