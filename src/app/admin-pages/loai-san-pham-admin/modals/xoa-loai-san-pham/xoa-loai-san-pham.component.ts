import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';   
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-xoa-loai-san-pham',
  templateUrl: './xoa-loai-san-pham.component.html',
  styleUrls: ['./xoa-loai-san-pham.component.scss']
})
export class XoaLoaiSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() id;
  @Input() tenLSP;
  constructor(public activeModal: NgbActiveModal,
    public http: HttpClient,
    public errorService: ErrorService,) { }

  ngOnInit() {
  }
  xoaLoaiSP(id){
    this.http
      .delete(environment.apiUrl + environment.apiList.LoaiSanPham + id, {
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
