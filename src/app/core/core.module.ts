import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { API_URL } from './tokens';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api_url
    },
    {
      provide: API_URL,
      useValue: 'http://localhost:3000/api/'
    },
  ]
})
export class CoreModule { }
