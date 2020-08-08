import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject = new BehaviorSubject({});
  user = this.userSubject.asObservable();

  constructor(private api: ApiService, private router: Router) {}

  initUser() {
    const userLogin = localStorage.getItem('userLogin');
    if (userLogin) {
      this.userSubject.next(JSON.parse(userLogin));
    }
  }

  dangKy(values): Observable<any> {
    const data = { ...values, maNhom: 'GP01' };
    return this.api.post('QuanLyNguoiDung/DangKy', data);
  }

  dangNhap(values): Observable<any> {
    return this.api.post('taikhoans', values).pipe(
      // return this.api.post('QuanLyNguoiDung/DangNhap', values).pipe(
      tap((result) => {
        this.userSubject.next(result);
        localStorage.setItem('userLogin', JSON.stringify(result));
        this.router.navigate(['/admin']);

        // Sau khi đăng nhập thành công
        // redirect tới trang / hoặc /admin tuỳ theo
        // mã loại người dùng
        // if (result.maLoaiNguoiDung === 'QuanTri') {
        //   this.router.navigate(['/admin']);
        // } else {
        //   this.router.navigate(['/admin']);
        // }
      })
    );
  }
}
