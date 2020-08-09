import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThuongHieuService {
  constructor(private api: ApiService, private router: Router) {}
  dangNhap(values): Observable<any> {
    return this.api.post('thuongHieux', values);
  }
}
