import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { TempUsersResolveService } from './temp-users-resolve.service';
import { LoginGuard } from './login-guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tweets',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginLogoutComponent,
    resolve: {
      users: TempUsersResolveService,
    },
  },
  {
    path: 'logout',
    component: LoginLogoutComponent,
  },
  {
    path: 'tweets',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
