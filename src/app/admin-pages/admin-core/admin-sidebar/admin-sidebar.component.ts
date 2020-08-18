import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent implements OnInit {
  thuongHieux:any = []; 
  constructor(private router: Router,
    public http : HttpClient,
    public errorService: ErrorService,) {}
  ngOnInit(): void {
    this.getThuongHieu();
  }
  getThuongHieu(){
    this.http.get(environment.apiUrl + environment.apiList.ThuongHieu,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    })
    .subscribe(
      (data) => {
        this.thuongHieux = data;
        console.log(this.thuongHieux);
      },
      (error) => {
        this.errorService.showError(error);
      }
    );
  }
}
