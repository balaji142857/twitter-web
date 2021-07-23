import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import * as env from '../environments/environment';


@Injectable(
//   {
//   providedIn: 'root',
// }
)
export class LoginGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(env.environment.loginId, 'is the env check');
    if (!env.environment.loginId) {
      //redirect to login page
      console.log('redirecting to login page')
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
     if (!env.environment.loginId) {
       //redirect to login page
       this.router.navigate['/login'];
     }
     return true;
  }
}
