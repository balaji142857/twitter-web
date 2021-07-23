import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import * as env from '../../environments/environment';
@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.scss'],
})
export class LoginLogoutComponent implements OnInit {
  selectedUser;
  users = [];
  appEnv;

  constructor(private snapshot: ActivatedRoute, private router: Router) {
    this.appEnv = env.environment;
  }

  ngOnInit(): void {
    this.users = this.snapshot.snapshot.data['users'];
    console.log('available user accounts is : ', this.users);
  }

  login(userId){
    env.environment.loginId = userId;
    this.router.navigate(['/']);
  }

  logout() {
    env.environment.loginId = null;
  }
}
