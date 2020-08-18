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
  chitietSP: any = [];
  loaiSp: any = [];
  sanPham: any = [];
  kichCoSanPham: any = [];
  danhSachSanPham: any = [];
  ten: any;
  sub: any;
  id: any;
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.layLoaiSp(this.id);
    });
  }

  layLoaiSp(id) {
    this.http
      .get(environment.apiUrl + environment.apiList.DsSanPham + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.chitietSP.push(data);
          this.chitietSP.forEach((chiTiet) => {
            this.chitietSP = chiTiet;
            chiTiet.loaiSps.forEach((lsp) => {
              this.loaiSp = lsp;
              lsp.sanPhams.forEach((sps) => {
                this.sanPham = sps;
                sps.kichCoSps.forEach((kc) => {
                  this.kichCoSanPham = kc;
                  this.danhSachSanPham.push(kc);
                });
              });
            });
          });
          console.log('chitietSP', this.chitietSP);
          console.log('loaiSp', this.loaiSp);
          console.log('sanPham', this.sanPham);
          console.log('kichCoSanPham', this.kichCoSanPham);
          console.log('danhSachSanPham', this.danhSachSanPham);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
}
