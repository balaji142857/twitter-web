import { Injectable } from '@angular/core';
import { Tweet } from '../models/tweet';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as env from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TweetService {

  baseUrl = 'tweet-service/';
  baseDipatchUrl = 'dispatch-service/'


  constructor(private http: HttpClient) {}

  sendTweet(model: Tweet) {
    return this.http.post(
      `${env.environment.baseUrl}${this.baseDipatchUrl}tweet`,
      model
    );
  }

  getTweets() {
    return this.http.get<Tweet[]>(`${env.environment.baseUrl}${this.baseUrl}tweets`);
  }

  getUsers() {
    return this.http.get<string[]>(
      `${env.environment.baseUrl}${this.baseUrl}tweets/users`
    );
  }
}
