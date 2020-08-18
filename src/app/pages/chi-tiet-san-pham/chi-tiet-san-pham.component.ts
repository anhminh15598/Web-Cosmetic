import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from 'src/service/error.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.scss']
})
export class ChiTietSanPhamComponent implements OnInit {
  chitietSP:any = [];
  sub:any;
  id:any;
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService,
    private route: ActivatedRoute, 
  ) { }
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.layLoaiSp(this.id);
    });
  }
  layLoaiSp(id){
    this.http
      .get('https://api.usbeauty.vn/api/ThuongHieux/', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.chitietSP = data;
          console.log(this.chitietSP);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
}
