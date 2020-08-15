import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.scss']
})
export class SanPhamComponent implements OnInit {
  id:number;
  sub:any;
  sanPham1:any = [1,2,3];
  sanPham:any = [];
  thuongHieu:any =[];
  loaiSp:any =[];
  kichCosp:any =[];
  dsGiaSp:any = [];
  constructor
  (private route: ActivatedRoute,
    public http : HttpClient,
    public errorService: ErrorService,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.getSanPham(this.id);
    });
  }
  getSanPham(id){
    let _thuongHieu:any = [];
    let _kichCoSp:any = [];
    let _sanPham:any = [];
    let _dsGiaSP:any = [];
    this.http.get(environment.apiUrl+environment.apiList.SanPham+id,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(data =>{ 
      _thuongHieu.push(data);
      _thuongHieu.forEach(th => {
        th.loaiSps.forEach(lsp => {
          lsp.sanPhams.forEach(sp => {
            _sanPham.push(sp);
            sp.kichCoSps.forEach(element => {
              _kichCoSp.push(element);
              _dsGiaSP.push(element.giaSp);
            });
          });
        });
      });
      this.thuongHieu = _thuongHieu;
      this.sanPham = _sanPham;
      this.kichCosp = _kichCoSp.sort(function(a, b){return a - b});
      this.dsGiaSp = _dsGiaSP.sort(function(a, b){return a - b});
       console.log(this.kichCosp);
       console.log(this.dsGiaSp);
    },
    error  => {
      this.errorService.showError(error);
    });
  }
  giaSanPham(gia){

  }
}
