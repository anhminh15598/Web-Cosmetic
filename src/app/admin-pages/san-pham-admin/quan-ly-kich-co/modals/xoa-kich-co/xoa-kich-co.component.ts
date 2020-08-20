import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';   
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-xoa-kich-co',
  templateUrl: './xoa-kich-co.component.html',
  styleUrls: ['./xoa-kich-co.component.scss']
})
export class XoaKichCoComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() tenKc;
  @Input() id;
  constructor(public activeModal: NgbActiveModal,
    public http: HttpClient,
    public errorService: ErrorService,) { }

  ngOnInit() {
  }
  xoaKc(id){
    this.http
      .delete(environment.apiUrl + environment.apiList.KichCoSanPham + id, {
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
