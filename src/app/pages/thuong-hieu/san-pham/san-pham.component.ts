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
  thuongHieu: any = [];
  chitietSP:any = [];
  ten: any;
  sub:any;
  id:any;
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService,
    private route: ActivatedRoute, 
    ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.layLoaiSp(this.id);
    });
  }

  layLoaiSp(id){
    this.http
      .get(environment.apiUrl + environment.apiList.DsSanPham + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.chitietSP.push(data);
          console.log(this.chitietSP);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
}
