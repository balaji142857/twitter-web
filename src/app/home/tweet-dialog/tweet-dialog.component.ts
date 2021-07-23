import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { Tweet } from '../models/tweet';
import  * as env  from '../../../environments/environment';


@Component({
  selector: 'app-tweet-dialog',
  templateUrl: './tweet-dialog.component.html',
  styleUrls: ['./tweet-dialog.component.scss'],
})
export class TweetDialogComponent implements OnInit {
  title = 'Send tweet';
  tweetRows = 6;
  tweetChars = 450;

  model: Tweet;

  constructor(private service: TweetService) {
    this.model = {
      tweetMessage: null,
      authorId: env.environment.loginId,
    };
  }

  ngOnInit(): void {

  }

  post(){
    this.service.sendTweet(this.model).subscribe(
      data => console.log('succes',data),
      err => console.error('errored',err)
    );
  }
}
