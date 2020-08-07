import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(
    private location: Location,
  ) { }
  showError(error) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401 || error.status === 403) {
        console.log("401");
      }
      if (error.status === 404) {
        console.log("404");
      }
      if (error.status === 500) {
        console.log("500");
      }
    }
  }
}
