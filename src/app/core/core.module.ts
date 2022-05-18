import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { API_URL } from './tokens';

import { AuthConfig } from 'angular-oauth2-oidc';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // {
    //   provide: HttpClient,
    //   useClass: MyMuchBetterAndAwesomeHttpClient
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      // Cannot mix multi providers and regular providers
      multi: true
    },
    {
      provide: AuthConfig,
      useValue: environment.authConfig
    }
  ]
})
export class CoreModule {

  static forRoot(api_url = environment.api_url): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: API_URL,
          useValue: api_url
        },
      ]
    }
  }
}
