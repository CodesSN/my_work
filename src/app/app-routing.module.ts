import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './pages/authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { AdminGuard } from './core/guard/admin.guard';
import { BarberGuard } from './core/guard/barber.guard';
import { UserGuard } from './core/guard/user.guard';
const routes: Routes = [
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./pages/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'hr',
        loadChildren: () =>
          import('./pages/human-resources/human-resources.module').then((m) => m.HumanResourcesModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'barber',
        loadChildren: () =>
          import('./pages/barber/barber.module').then((m) => m.BarberModule),
        canActivate: [BarberGuard]
      },
      {
        path: 'monitorist',
        loadChildren: () =>
          import('./pages/monitorist/monitorist.module').then((m) => m.MonitoristModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'assets',
        loadChildren: () =>
          import('./pages/assets/assets.module').then((m) => m.AssetsModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./pages/apps/apps.module').then((m) => m.AppsModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'uploading',
        loadChildren: () =>
          import('./pages/uploading/uploading.module').then((m) => m.UploadingModule),
        canActivate: [BarberGuard]
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./pages/user/user.module').then((m) => m.UserModule),
        canActivate: [UserGuard]
      },
    ],
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./pages/appointments/appointments.module').then((m) => m.AppointmentsModule),
    canActivate: []
  },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
