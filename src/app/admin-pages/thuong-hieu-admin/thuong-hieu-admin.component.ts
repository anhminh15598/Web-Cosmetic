import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-thuong-hieu-admin',
  templateUrl: './thuong-hieu-admin.component.html',
  styleUrls: ['./thuong-hieu-admin.component.scss'],
})
export class ThuongHieuAdminComponent implements OnInit {
  themThuongHieuForm: FormGroup;

  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService
  ) {}

  // tenThuongHieu: string = '1';
  // moTa: string = '2';

  postId;
  p: any;
  xacNhan: any = false;

  themThuongHieu() {
    this.themThuongHieuForm.markAllAsTouched();
    if (this.themThuongHieuForm.invalid) return;
    this.http
      .post<any>(
        'https://api.usbeauty.vn/api/ThuongHieux/',
        this.themThuongHieuForm.value,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        }
      )
      .subscribe((data) => {
        this.postId = data.id;
        this.getThuongHieu();
        this.xacNhan === true;
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }

  xoaThuongHieu(id) {
    console.log(id);
    this.http
      .delete('https://api.usbeauty.vn/api/thuongHieux/' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        console.log(data);
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }

  suaThuongHieu(id) {
    console.log(id);
    this.http
      .delete('https://api.usbeauty.vn/api/thuongHieux/' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        console.log(data);
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
    this.themThuongHieuForm = new FormGroup({
      tenThuongHieu: new FormControl('', [Validators.required]),
      moTa: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    });
  }
  ngDoCheck() {}
}
