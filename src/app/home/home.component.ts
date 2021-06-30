import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  tweets = [{
    authorName: 'Narendra Modi',
    isAuthorVerified: true,
    authorHandle: '@narendramodi',
    issuedTime: new Date(),
    authorDp: 'assets/images/user.jpg',
    tweetMessage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    actions: {
      likes: 1000,
      retweets: 50000,
      comments: 800,
    }
  },
  {
    authorName: 'Yogi Adityanath',
    isAuthorVerified: true,
    authorHandle: '@myogiadityanath',
    issuedTime: new Date(),
    authorDp: 'assets/images/yogi.jpg',
    tweetMessage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    actions: {
      likes: 8000,
      retweets: 120000,
      comments: 80,
    },
  }]

  ngOnInit(): void {}
}
