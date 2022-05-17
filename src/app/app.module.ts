import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { API_URL } from './core/tokens';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // SuperHiperDataGridDatePicker
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    // {
    //   provide: API_URL,
    //   useValue: 'http://localhost:3000/api/'
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
