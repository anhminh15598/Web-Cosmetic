import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorService } from 'src/service/error.service';

@Component({
  selector: 'app-thuong-hieu',
  templateUrl: './thuong-hieu.component.html',
  styleUrls: ['./thuong-hieu.component.scss'],
})

export class ThuongHieuComponent implements OnInit {
  filterargs = {}
  p:any;
  id:number;
  sub:any;
  thuongHieu:any = [];
  dsSanPham:any = [];
  dsSanPhamLoc:any = [];
  constructor(
    private route: ActivatedRoute,
    public http : HttpClient,
    public errorService: ErrorService,){}
    
  ngOnInit() {
    this.sub = this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.getDsThuongHieu(this.id);
    });
  }

  getDsThuongHieu(id){
    var _dsThuongHieu = [];
    var _dsLoaiSP = [];
    var _dsSanpham = [];
    this.http.get(environment.apiUrl+environment.apiList.DsThuongHieu+id,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(data =>{ 
      _dsThuongHieu.push(data);
      _dsThuongHieu.forEach(th => {
        th.loaiSps.forEach(lsp => {
            lsp.sanPhams.forEach(dssp => {
              _dsSanpham.push(dssp);
              
            });
        });
      });
      this.thuongHieu = _dsThuongHieu;
      this.dsSanPham = _dsSanpham;
      this.dsSanPhamLoc = this.dsSanPham;
    },
    error  => {
      this.errorService.showError(error);
    });
  }
  locLoaiSP(event:any){
    var _dsSanPham = [];
    var idLsp = event.target.value;
    if(idLsp == 0){
      this.getDsThuongHieu(this.id);
    }else{
      this.dsSanPham.forEach(element => {
        if(element.idLoaiSp == idLsp){
          _dsSanPham.push(element);
        }
      });
      this.dsSanPhamLoc = _dsSanPham;
    }
    console.log(this.dsSanPham);
  }
}
