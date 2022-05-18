import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { API_URL } from './tokens';

import { AuthConfig } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
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
