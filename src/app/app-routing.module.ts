import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './pages/authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
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
      },
      {
        path: 'hr',
        loadChildren: () =>
          import('./pages/human-resources/human-resources.module').then((m) => m.HumanResourcesModule),
      },
      {
        path: 'barber',
        loadChildren: () =>
          import('./pages/barber/barber.module').then((m) => m.BarberModule),
      },
      {
        path: 'assets',
        loadChildren: () =>
          import('./pages/assets/assets.module').then((m) => m.AssetsModule),
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./pages/apps/apps.module').then((m) => m.AppsModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
      },
    ],
  },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
