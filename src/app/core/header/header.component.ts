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
  listThuongHieu = [
    { id: '1', tenThuongHieu: 'thuongHieu1' },
    { id: '2', tenThuongHieu: 'thuongHieu2' },
  ];
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

          console.log(data);
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
