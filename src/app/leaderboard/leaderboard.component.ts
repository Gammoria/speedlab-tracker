import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
})
export class LeaderboardComponent implements OnInit {

  leaderboardData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchLeaderboardData();
  }

  fetchLeaderboardData(): void {
    this.http.get<any[]>('https://speedlabtracker.netlify.app/.netlify/functions/insertRun')
      .subscribe({
        next: (data) => {
          this.leaderboardData = data;
        },
        error: (error) => {
          console.error('Error fetching leaderboard data:', error);
        }
      });
  }


}