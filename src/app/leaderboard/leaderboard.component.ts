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
    this.http.get<any[]>('https://speedlabtracker.netlify.app/.netlify/functions/leaderboard')
      .subscribe({
        next: (data) => {
          this.leaderboardData = data;
        },
        error: (error) => {
          console.error('Error fetching leaderboard data:', error);
        }
      });
  }

  convertToTimeFormat(ms: number): string {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000);
  
    const formattedTime = `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}:${this.padNumber(milliseconds)}`;
    return formattedTime;
  }
  
  private padNumber(number: number): string {
    return number.toString().padStart(2, '0');
  }


}