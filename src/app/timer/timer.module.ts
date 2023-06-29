import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TimerRoutingModule } from './timer-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimerRoutingModule,
    HttpClientModule,
  ]
})
export class TimerModule { }
