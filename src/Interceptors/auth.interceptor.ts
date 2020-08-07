import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userLogin = localStorage.getItem('userLogin');
    let accessToken = '';
    if (userLogin) {
      accessToken = JSON.parse(userLogin).accessToken;
    }

    const req = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(req);
  }
}
