import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorService } from 'src/service/error.service';

@Component({
  selector: 'app-thuong-hieu',
  templateUrl: './thuong-hieu.component.html',
  styleUrls: ['./thuong-hieu.component.scss'],
})
export class ThuongHieuComponent implements OnInit {
  term: string;

  filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port',
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports',
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center',
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club',
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor',
    },
  ];

  filterargs = {};
  p: any;
  //listThuongHieu = [{id:"1", tenThuongHieu:'thuongHieu1'},{id:"2", tenThuongHieu:'thuongHieu2'}];
  id: number;
  sub: any;
  thuongHieu: any = [];
  dsSanPham: any = [];
  dsSanPhamLoc: any = [];
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public errorService: ErrorService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.getDsThuongHieu(this.id);
    });
    console.log(this.filterData);
  }

  getDsThuongHieu(id) {
    var _dsThuongHieu = [];
    var _dsLoaiSP = [];
    var _dsSanpham = [];
    this.http
      .get(environment.apiUrl + environment.apiList.DsThuongHieu + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          _dsThuongHieu.push(data);
          _dsThuongHieu.forEach((th) => {
            th.loaiSps.forEach((lsp) => {
              lsp.sanPhams.forEach((sp) => {
                _dsSanpham.push(sp);
              });
            });
          });
          this.thuongHieu = _dsThuongHieu;
          this.dsSanPham = _dsSanpham;
          this.dsSanPhamLoc = this.dsSanPham;
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  locLoaiSP(event: any) {
    var _dsSanPham = [];
    var idLsp = event.target.value;
    if (idLsp == 0) {
      this.getDsThuongHieu(this.id);
    } else {
      this.dsSanPham.forEach((element) => {
        if (element.idLoaiSp == idLsp) {
          _dsSanPham.push(element);
        }
      });
      this.dsSanPhamLoc = _dsSanPham;
    }
    console.log(this.dsSanPham);
  }
}
