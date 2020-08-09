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

  thuongHieux: any = [];
  getThuongHieu() {
    this.http
      .get('https://api.usbeauty.vn/api/ThuongHieux/', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.thuongHieux = data;

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
