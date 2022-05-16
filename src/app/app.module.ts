import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // SuperHiperDataGridDatePicker
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [/* HeaderComponent,FooterComponents, */AppComponent]
})
export class AppModule { }
