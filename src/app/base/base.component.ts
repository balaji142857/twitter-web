import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  menuItems = [
    {
      icon: 'home',
      title: 'Home',
      route: '/tweets',
      description: 'Home page',
    },
    {
      icon: 'search',
      title: 'Search',
      route: '/search',
      description: 'Search page',
    },
    {
      icon: 'settings',
      title: 'Settings',
      route: '/settings',
      description: 'Settings page',
    },
    {
      icon: 'perm_identity',
      title: 'User',
      route: '/user',
      description: 'Account page',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
