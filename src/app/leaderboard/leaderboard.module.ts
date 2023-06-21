import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardComponent } from './leaderboard.component';


@NgModule({
  imports: [
    CommonModule,
    LeaderboardRoutingModule
  ],
  declarations: [LeaderboardComponent],
})
export class LeaderboardModule { }