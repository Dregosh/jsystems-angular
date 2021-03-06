import { ErrorHandler, Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { API_URL } from '../../tokens';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private errorHandler: ErrorHandler,
    @Inject(API_URL) private api_url: string,
    private auth: AuthService
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authReq = request.clone({

      // Base URL
      url: request.url.includes('^http') ?
        request.url : this.api_url + request.url,

      // Auth Token
      setHeaders: {
        Authorization: 'Bearer ' + this.auth.getToken()
      }
    })

    // TODO: if in cache? 
    // return of(cache.get(request))

    return next.handle(authReq).pipe(
      catchError((error: unknown) => {

        // TODO: Remote Telemetry Error - Sentry.io, DataDog, DevOps...
        this.errorHandler.handleError(error)

        if (!(error instanceof HttpErrorResponse)) {
          return throwError(() => new Error('Unexpected Error'))
        }

        // TODO: refresh token and :
        // return next.handle(refreshedRequest)

        if (error.status === 401) {
          this.auth.login()
        }

        if (!(isSpotifyErrorResponse(error.error))) {
          return throwError(() => new Error('Unexpected Server Error'))
        }

        const res = error.error
        return throwError(() => new Error(res.error.message))
      })
    )
  }
}


// Function Type Guards
function isSpotifyErrorResponse(res: any): res is SpotifyErrorResponse {
  return (res && 'error' in res
    && 'status' in res.error
    && 'message' in res.error)
}

// Generated by https://quicktype.io
export interface SpotifyErrorResponse {
  error: {
    status: number;
    message: string;
  }
}

// HttpClient.get(req) -> Handler.handle(req)


// Handler = A
// A.next = B
// B.next = C 
// C.next = HttpHandler