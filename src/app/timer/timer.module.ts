import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TimerRoutingModule } from './timer-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimerRoutingModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class TimerModule { }
