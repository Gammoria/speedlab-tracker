import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NewTestRoutingModule } from './new-test-routing.module';
import { NewTestComponent } from './new-test.component';


@NgModule({
  declarations: [NewTestComponent],
  imports: [
    CommonModule,
    RouterModule,
    NewTestRoutingModule,
    ReactiveFormsModule,
  ]
})
export class NewTestModule { }