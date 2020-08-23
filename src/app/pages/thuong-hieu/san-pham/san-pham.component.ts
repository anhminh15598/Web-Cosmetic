import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/service/error.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lightbox } from 'ngx-lightbox';

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
  locdsSanPhamLoc = [];

  _albums: any = [
    {
      hinhAnh: '../../../../assets/img/sp1.png',
    },
    {
      hinhAnh: '../../../../assets/img/sp2.png',
    },
    {
      hinhAnh: '../../../../assets/img/sp3.png',
    },
    {
      hinhAnh: '../../../../assets/img/sp1.png',
    },
  ];
  hinhAnh: any = [];

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public errorService: ErrorService,
    private _lightbox: Lightbox
  ) {
    // console.log(this._albums.length);

    for (let i = 0; i < this._albums.length; i++) {
      // const src = '../../../../assets/img/sp' + i + '.png';
      const src = this._albums[i].hinhAnh;
      const caption = 'Hình ảnh ' + (i + 1);
      const thumb = this._albums[i].hinhAnh;
      // const thumb = '../../../../assets/img/sp' + i + '.png';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this.hinhAnh.push(album);
      console.log('album', album);
    }
  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.hinhAnh, index);

    console.log('i', index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  onKey(event) {
    this.giaSp = event.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });
  }

  getSanPham(id) {
    let _thuongHieu: any = [];
    let _kichCoSp: any = [];
    let _sanPham: any = [];
    let _dsGiaSP: any = [];
    let locThuongHieu = [];
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

          this.giaSp = this.dsGiaSp[this.dsGiaSp.length - 1].toLocaleString(
            'it-IT',
            {
              style: 'currency',
              currency: 'VND',
            }
          );
          console.log('thuongHieu', this.thuongHieu);
          console.log('loaiSp', this.loaiSp);
          console.log('sanPham', this.sanPham);
          console.log('kichCosp', this.kichCosp);
          console.log('dsGiaSp', this.dsGiaSp);

          this.http
            .get(
              environment.apiUrl +
                environment.apiList.DsThuongHieu +
                this.thuongHieu.id,
              {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                }),
              }
            )
            .subscribe(
              (data) => {
                locThuongHieu.push(data);
                locThuongHieu.forEach((lth) => {
                  for (let i = 0; i < lth.loaiSps.length; i++) {
                    // console.log('lth.loaiSps[i]', lth.loaiSps[i].id);
                    // console.log('id', this.loaiSp.id);

                    if (lth.loaiSps[i].id === this.loaiSp.id) {
                      this.locdsSanPhamLoc = lth.loaiSps[i].sanPhams;
                      console.log('locdsSanPhamLoc', this.locdsSanPhamLoc);
                    }
                  }
                });
              },
              (error) => {
                this.errorService.showError(error);
              }
            );
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }

  giaSanPham(gia) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.getSanPham(this.id);
    });
  }
}
