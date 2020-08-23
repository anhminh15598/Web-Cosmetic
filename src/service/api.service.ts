import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // BASE_URL = 'https://api.usbeauty.vn/api';
  BASE_URL = environment.apiUrl;
  // BASE_URL = 'http://movie0706.cybersoft.edu.vn/api';
  constructor(private http: HttpClient) {}

  handleError(err: any) {
    switch (err.status) {
      case 404:
        // Show thông báo lỗi
        console.log('404');
        break;
      case 500:
        console.log('Lỗi server');
        break;
      default:
        break;
    }
    return throwError(err);
  }

  get(path: string, options?: any): Observable<any> {
    return this.http
      .get(`${this.BASE_URL}${path}`, options)
      .pipe(catchError(this.handleError));
  }

  post(path: string, body: any, options?: any): Observable<any> {
    return this.http
      .post(`${this.BASE_URL}${path}`, body, options)
      .pipe(catchError(this.handleError));
  }

  put(path: string, body: any, options?: any): Observable<any> {
    return this.http
      .put(`${this.BASE_URL}${path}`, body, options)
      .pipe(catchError(this.handleError));
  }

  delete(path: string, options?: any): Observable<any> {
    return this.http
      .delete(`${this.BASE_URL}/${path}`, options)
      .pipe(catchError(this.handleError));
  }
}
