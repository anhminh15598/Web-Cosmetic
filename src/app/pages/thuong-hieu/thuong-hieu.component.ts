import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ErrorService } from 'src/service/error.service';

@Component({
  selector: 'app-thuong-hieu',
  templateUrl: './thuong-hieu.component.html',
  styleUrls: ['./thuong-hieu.component.scss']
})
export class ThuongHieuComponent implements OnInit {
  //listThuongHieu = [{id:"1", tenThuongHieu:'thuongHieu1'},{id:"2", tenThuongHieu:'thuongHieu2'}];
  id:number;
  sub:any;
  thuongHieux:any = [];
  constructor(
    private route: ActivatedRoute,
    public http : HttpClient,
    public errorService: ErrorService,
    ) {
     }
    
  ngOnInit() {
    this.sub = this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.getDsThuongHieu(this.id);
    });
  }

  getDsThuongHieu(id){
    this.http.get("https://localhost:44380/api/ThuongHieux/"+id,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(data =>{
      this.thuongHieux.push(data) 
      console.log(this.thuongHieux);
    },
    error  => {
      this.errorService.showError(error);
    });
  }

}
