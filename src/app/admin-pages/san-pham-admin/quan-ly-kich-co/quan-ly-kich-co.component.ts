import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from 'src/service/error.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ThemKichCoComponent } from './modals/them-kich-co/them-kich-co.component';
import { XoaKichCoComponent } from './modals/xoa-kich-co/xoa-kich-co.component';
import { SuaKichCoComponent } from './modals/sua-kich-co/sua-kich-co.component';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-quan-ly-kich-co',
  templateUrl: './quan-ly-kich-co.component.html',
  styleUrls: ['./quan-ly-kich-co.component.scss']
})
export class QuanLyKichCoComponent implements OnInit {
  sub:any;
  id:any;
  kichCoSP:any = [];
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService,
    private route: ActivatedRoute, 
    private modalService: NgbModal,
    private formBuilder: FormBuilder, 
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.getKichCoSanPham(this.id);
    });
  }
  getKichCoSanPham(id) {
    let _kichCoSP = [];
    this.http
      .get(environment.apiUrl + environment.apiList.dsKichCoSp + id , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.kichCoSP = data;
          console.log(this.kichCoSP);
          },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  moThemKc() {
    const modalRef = this.modalService.open(ThemKichCoComponent);
    modalRef.componentInstance.my_modal_title = 'Thêm Kích cỡ/Giá';
    modalRef.componentInstance.my_modal_content = 'I am your content';
    modalRef.componentInstance.idSp =this.id;
  }
  moSuaKc(id,tenKc) {
    const modalRef = this.modalService.open(SuaKichCoComponent);
    modalRef.componentInstance.my_modal_title = 'Sửa Kích cỡ/Giá';
    modalRef.componentInstance.my_modal_content = 'I am your content';
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.tenKc = tenKc;
    modalRef.componentInstance.idSp =this.id;
  }
  moXoaKc(id,tenKc) {
    const modalRef = this.modalService.open(XoaKichCoComponent);
    modalRef.componentInstance.my_modal_title = 'Xóa Kích cỡ/Giá';
    modalRef.componentInstance.my_modal_content = 'I am your content';
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.tenKc = tenKc;
    
  }
}
