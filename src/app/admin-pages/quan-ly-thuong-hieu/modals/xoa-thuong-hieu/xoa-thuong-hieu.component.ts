import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
import { QuanLyThuongHieuComponent } from '../../quan-ly-thuong-hieu.component';
@Component({
  selector: 'app-xoa-thuong-hieu',
  templateUrl: './xoa-thuong-hieu.component.html',
  styleUrls: ['./xoa-thuong-hieu.component.scss']
})
export class XoaThuongHieuComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() id;
  @Input() tenTH;
  constructor(public activeModal: NgbActiveModal,
    public http: HttpClient,
    public errorService: ErrorService,
    ) { }

  ngOnInit(){

  }
  xoaThuongHieu(id) {
    this.http
      .delete(environment.apiUrl + environment.apiList.DsThuongHieu + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        this.activeModal.close('Close click');
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }
}
