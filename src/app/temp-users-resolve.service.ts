import { Injectable } from '@angular/core';
import { TweetService } from './home/services/tweet.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TempUsersResolveService implements Resolve<String[]> {
  constructor(private service: TweetService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
      return this.service.getUsers();
  }
}
