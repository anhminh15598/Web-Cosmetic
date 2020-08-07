import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ErrorService } from 'src/service/error.service';

@Component({
  selector: 'app-thuong-hieu',
  templateUrl: './thuong-hieu.component.html',
  styleUrls: ['./thuong-hieu.component.scss'],
})
export class ThuongHieuComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public errorService: ErrorService
  ) {}

  //listThuongHieu = [{id:"1", tenThuongHieu:'thuongHieu1'},{id:"2", tenThuongHieu:'thuongHieu2'}];
  ten: any;
  thuongHieux: any;

  getSanPham() {
    this.http
      .get('https://api.usbeauty.vn/api/thuongHieux', {
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
    this.getSanPham();
  }
  ngDoCheck() {
    this.ten = this.route.snapshot.paramMap.get('tenThuongHieu');
  }
}
