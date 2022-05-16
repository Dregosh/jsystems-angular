import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClockComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    ClockComponent,
    FormsModule
  ]
})
export class SharedModule { }
