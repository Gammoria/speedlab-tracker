import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardComponent } from './leaderboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    LeaderboardRoutingModule,
    HttpClientModule,
  ],
  declarations: [LeaderboardComponent],
})
export class LeaderboardModule { }