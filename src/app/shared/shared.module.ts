import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecentSearchComponent } from './containers/recent-search/recent-search.component';

@NgModule({
  declarations: [
    ClockComponent,
    PageNotFoundComponent,
    RecentSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ClockComponent,
    FormsModule,
    ReactiveFormsModule,
    RecentSearchComponent
  ]
})
export class SharedModule { }
