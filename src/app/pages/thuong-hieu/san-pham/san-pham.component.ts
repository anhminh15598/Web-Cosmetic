import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/service/error.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.scss'],
})
export class SanPhamComponent implements OnInit {
  id: number;
  sub: any;
  sanPham1: any = [1, 2, 3];
  sanPham: any = [];
  thuongHieu: any = [];
  loaiSp: any = [];
  kichCosp: any = [];
  dsGiaSp: any = [];
  giaSp: any;
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public errorService: ErrorService
  ) {}
  onKey(event) {
    this.giaSp = event;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.getSanPham(this.id);
    });
  }
  getSanPham(id) {
    let _thuongHieu: any = [];
    let _kichCoSp: any = [];
    let _sanPham: any = [];
    let _dsGiaSP: any = [];
    this.http
      .get(environment.apiUrl + environment.apiList.SanPham + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          _thuongHieu.push(data);
          _thuongHieu.forEach((th) => {
            this.thuongHieu = th;
            th.loaiSps.forEach((lsp) => {
              this.loaiSp = lsp;
              lsp.sanPhams.forEach((sp) => {
                _sanPham.push(sp);
                this.sanPham = sp;
                sp.kichCoSps.forEach((element) => {
                  _kichCoSp.push(element);
                  _dsGiaSP.push(element.giaSp);
                });
              });
            });
          });
          // this.thuongHieu = _thuongHieu;
          // this.sanPham = _sanPham;
          this.kichCosp = _kichCoSp.sort(function (a, b) {
            return a - b;
          });
          this.dsGiaSp = _dsGiaSP.sort(function (a, b) {
            return a - b;
          });

          this.giaSp = this.dsGiaSp[this.dsGiaSp.length - 1];
          console.log('thuongHieu', this.thuongHieu);
          console.log('loaiSp', this.loaiSp);
          console.log('sanPham', this.sanPham);
          console.log('kichCosp', this.kichCosp);
          console.log('dsGiaSp', this.dsGiaSp);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }

  giaSanPham(gia) {}
}
