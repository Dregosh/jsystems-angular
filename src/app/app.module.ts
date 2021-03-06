import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { API_URL } from './core/tokens';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // SuperHiperDataGridDatePicker
    CoreModule.forRoot(environment.api_url),
    OAuthModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    // PlackiModuleWithRotung
    SharedModule,
    // TestMocksProvidersModule // override previous
    AppRoutingModule,
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
