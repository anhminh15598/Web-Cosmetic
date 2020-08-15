import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from 'src/service/error.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { SuaLoaiSanPhamComponent } from './modals/sua-loai-san-pham/sua-loai-san-pham.component';
import { ThemLoaiSanPhamComponent } from './modals/them-loai-san-pham/them-loai-san-pham.component';
import { XoaLoaiSanPhamComponent } from './modals/xoa-loai-san-pham/xoa-loai-san-pham.component';
@Component({
  selector: 'app-loai-san-pham-admin',
  templateUrl: './loai-san-pham-admin.component.html',
  styleUrls: ['./loai-san-pham-admin.component.scss'],
})
export class LoaiSanPhamAdminComponent implements OnInit {
  // @Input() my_modal_title;
  // @Input() my_modal_content;
  sub:any;
  id:any;
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService,
    private route: ActivatedRoute, 
    private modalService: NgbModal 
  ) {}  

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
    }); 
  }
  moThemLsp(){
    const modalRef = this.modalService.open(ThemLoaiSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Thêm Loại sản phẩm';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
  moSuaLsp(){
    const modalRef = this.modalService.open(SuaLoaiSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Sửa Loại sản Phẩm';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
  moXoaLsp(){
    const modalRef = this.modalService.open(XoaLoaiSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Xóa Loại sản phẩm';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
}
