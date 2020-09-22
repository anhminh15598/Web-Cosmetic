import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/service/error.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lightbox } from 'ngx-lightbox';
import { ThemLoaiSanPhamComponent } from 'src/app/admin-pages/loai-san-pham-admin/modals/them-loai-san-pham/them-loai-san-pham.component';

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
  hinhAnh: any = [];
  srcSp: any;
  hinhAnhThui: number;
  albumSp: any = [];
  hinhAnh2: any = [{ a: 1 }];
  kiemTraHinhAnh1: boolean;

  resetHinhAnh(id) {
    // this.getSanPham(id);
    this.hinhAnh = [];
  }

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public errorService: ErrorService,
    private _lightbox: Lightbox
  ) {
    // console.log(this._albums.length);
  }
  createImgPath = (serverPath: string) => {
    return environment.Url + `${serverPath}`;
  };

  clickLayIndex(i) {
    this.hinhAnhThui = i;
  }

  clickDoiHinh(link) {
    this.srcSp = this.createImgPath(link);
    console.log('link', this.srcSp);
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.hinhAnh, index);
    console.log(this.hinhAnh);

    console.log('i', index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  onKey(event) {
    this.giaSp = event;
    // this.giaSp = event?.toLocaleString('it-IT', {
    //   style: 'currency',
    //   currency: 'USD',
    // });
  }

  getSanPham(id) {
    let _thuongHieu: any = [];
    let _kichCoSp: any = [];
    let _dsGiaSP: any = [];
    let locThuongHieu = [];
    let _albums: any = [];
    let hinhAnhs: any = [];

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
              lsp.sanPhams.forEach((sp, index) => {
                if (sp.id == id) {
                  this.sanPham = sp;
                  sp.hinhAnhs.forEach((ha) => {
                    _albums.push({ hinhAnh: ha.linkHinhAnh });
                  });
                  sp.kichCoSps.forEach((element) => {
                    console.log('element', element);

                    _kichCoSp.push(element);
                    _dsGiaSP.push(element.giaSp);
                  });
                }
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
          // this.giaSp = this.dsGiaSp[this.dsGiaSp.length - 1]?.toLocaleString(
          //   'it-IT',
          //   {
          //     style: 'currency',
          //     currency: 'VND',
          //   }
          // );
          console.log('thuongHieu', this.thuongHieu);
          console.log('loaiSp', this.loaiSp);
          console.log('sanPham', this.sanPham);
          console.log('hinhAnh', this.hinhAnh);
          console.log('kichCosp', this.kichCosp);
          console.log('dsGiaSp', this.dsGiaSp);
          console.log('_albums', _albums);
          console.log('albumsp', this.albumSp);

          for (let i = 0; i < _albums.length; i++) {
            // const src = '../../../../assets/img/sp' + i + '.png';
            const src = _albums[i].hinhAnh;
            const caption = 'Hình ảnh ' + (i + 1);
            const thumb = _albums[i].hinhAnh;
            // const thumb = '../../../../assets/img/sp' + i + '.png';
            const album = {
              src: this.createImgPath(src),
              caption: caption,
              thumb: thumb,
            };
            this.hinhAnh.push(album);
            console.log('hinhanh2', this.hinhAnh);
          }

          if (this.hinhAnh.length > 1) {
            this.kiemTraHinhAnh1 = true;
          } else {
            this.kiemTraHinhAnh1 = false;
          }
          console.log(this.kiemTraHinhAnh1);

          this.srcSp = this.createImgPath(_albums[0].hinhAnh);

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
    this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.getSanPham(this.id);
    });
    console.log('id', this.id);
  }
  // ngOnChanges() {
  //   this.hinhAnh.reset();
  // }
}
