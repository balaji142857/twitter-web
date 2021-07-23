import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TweetDialogComponent } from './tweet-dialog/tweet-dialog.component';
import { TweetService } from './services/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog, private service: TweetService) {}

  tweets = [];

  ngOnInit(): void {
    this.service.getTweets().subscribe(
      data=> {
        console.log(data);
        this.tweets = data;
      },
      err =>console.error(err)
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(TweetDialogComponent, {
      height: '50%',
      width: '80%',
      position: {
        left: '10%',
        top: '10%'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
