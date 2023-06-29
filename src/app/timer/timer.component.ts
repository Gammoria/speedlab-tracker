import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {

  formData: any;

  title = 'stopwatch';
  ms: any = '0' + 0;
  sec: any = '0' + 0;
  min: any = '0' + 0;
  hr: any = '0' + 0;
  msTot: any = '0' + 0;

  timerInterval: any;
  running = false;

  private padNumber(number: number): string {
    return number.toString().padStart(2, '0');
  }

  start(): void {
    if (!this.running) {
      const previousStartTime = Date.now() - this.msTot;
      this.running = true;
      this.timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - previousStartTime;
        this.msTot = elapsedTime;
        this.ms = this.padNumber(Math.floor(elapsedTime % 1000 / 10));
        this.sec = this.padNumber(Math.floor(elapsedTime / 1000 % 60));
        this.min = this.padNumber(Math.floor(elapsedTime / 1000 / 60 % 60));
        this.hr = this.padNumber(Math.floor(elapsedTime / 1000 / 60 / 60 % 24));
      }, 10);
    } else {
      this.pause();
    }
  }

  pause(): void {
    clearInterval(this.timerInterval);
    this.running = false;
  }

  finish(): void {
    clearInterval(this.timerInterval);
    this.running = false;
    this.hr = this.min = this.sec = this.ms = '0' + 0;
    this.formData.time = this.msTot;

    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' }).toUpperCase();
    const year = currentDate.getFullYear();
    
    const formattedDate = `${day}${month}${year}`;
    this.formData.date = formattedDate;
    this.formData.day = dayNames[dayOfWeek];

    console.log(this.formData);
  
    this.http.post<any>('https://speedlabtracker.netlify.app/.netlify/functions/insertRun', this.formData)
    .subscribe({
      next: (response: any) => {
        console.log(response);
        console.log('Run submitted successfully');
        // Handle any success actions, such as displaying a success message or navigating to another page
      },
      error: (error: any) => {
        console.error('Error submitting run:', error);
        // Handle any error actions, such as displaying an error message or logging the error
      }
    });

    this.router.navigate(['/new-test']);

  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (history.state && history.state.formData) {
      this.formData = history.state.formData;
    } else {
      // Handle the case when formData is not available
    }
  }
}