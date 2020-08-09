import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from 'src/service/error.service';

@Component({
  selector: 'app-san-pham-admin',
  templateUrl: './san-pham-admin.component.html',
  styleUrls: ['./san-pham-admin.component.scss'],
})
export class SanPhamAdminComponent implements OnInit {
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService
  ) {}
  sanPham: any = [];
  getSanPham() {
    this.http
      .get('https://api.usbeauty.vn/api/sanphams/', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.sanPham = data;

          console.log(data);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  ngOnInit() {
    this.getSanPham();
  }
}
