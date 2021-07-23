import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { TweetComponent } from './tweet/tweet.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { TweetDialogComponent } from './tweet-dialog/tweet-dialog.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent, TweetComponent, TweetDialogComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, FormsModule],
  exports: [RouterModule],
})
export class HomeModule {}
