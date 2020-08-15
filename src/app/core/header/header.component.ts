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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,
    public http : HttpClient,
    public errorService: ErrorService,)
    {}
    x = false;
    thuongHieux:any = [];
    getThuongHieu(){
      this.http.get(environment.apiUrl + environment.apiList.ThuongHieu,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.thuongHieux = data;
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
    }

  ngOnInit(): void {
    this.getThuongHieu();
  }
  onSelectList(id) {
    this.router.navigate(['/thuong-hieu/' + id]);
  }
}
