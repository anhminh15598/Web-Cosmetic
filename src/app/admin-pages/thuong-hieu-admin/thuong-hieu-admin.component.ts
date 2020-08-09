import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';

@Component({
  selector: 'app-thuong-hieu-admin',
  templateUrl: './thuong-hieu-admin.component.html',
  styleUrls: ['./thuong-hieu-admin.component.scss'],
})
export class ThuongHieuAdminComponent implements OnInit {
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService
  ) {}

  // tenThuongHieu: string = '1';
  // moTa: string = '2';

  postId;

  onClick(tenThuongHieu, moTa) {
    const themThuongHieu = { tenThuongHieu: tenThuongHieu, moTa: moTa };

    // console.log(themThuongHieu);

    this.http
      .post<any>('https://api.usbeauty.vn/api/ThuongHieux/', themThuongHieu, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        this.postId = data.id;
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }

  xoaThuongHieu(id) {
    console.log(id);
    this.http
      .delete('https://api.usbeauty.vn/api/thuongHieux/' + id)
      .subscribe((s) => {
        console.log(s);
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }

  thuongHieu: any = [];
  getThuongHieu() {
    this.http
      .get('https://api.usbeauty.vn/api/ThuongHieux/', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.thuongHieu = data;

          console.log(data);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }

  ngOnInit(): void {
    this.getThuongHieu();
  }
}
