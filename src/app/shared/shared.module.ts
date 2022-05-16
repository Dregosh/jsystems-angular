import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    ClockComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent
  ]
})
export class SharedModule { }
