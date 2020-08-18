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
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-loai-san-pham-admin',
  templateUrl: './loai-san-pham-admin.component.html',
  styleUrls: ['./loai-san-pham-admin.component.scss'],
})
export class LoaiSanPhamAdminComponent implements OnInit {
  // @Input() my_modal_title;
  // @Input() my_modal_content;
  dsloaiSP:any = [];
  sub:any;
  id:any;
  tenThuongHieu:any;
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
      this.layDsLoaiSp(this.id);
      this.layTenThuongHieu(this.id)
    }); 
  }
  layDsLoaiSp(id){
    this.http
      .get(environment.apiUrl + environment.apiList.DsLoaiSanPham + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.dsloaiSP = data;
          console.log(data);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  layTenThuongHieu(id){
    let _dsThuongHieu :any;
    this.http
      .get(environment.apiUrl + environment.apiList.DsThuongHieu, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          _dsThuongHieu = data;
          _dsThuongHieu.forEach(element => {
            if(element.id == id){
              this.tenThuongHieu = element.tenThuongHieu;
            }
          });
          console.log(this.tenThuongHieu);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  moThemLsp(){
    const modalRef = this.modalService.open(ThemLoaiSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Thêm Loại sản phẩm';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
  moSuaLsp(id){
    const modalRef = this.modalService.open(SuaLoaiSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Sửa Loại sản Phẩm';
    modalRef.componentInstance.id = id;
  }
  moXoaLsp(id){
    const modalRef = this.modalService.open(XoaLoaiSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Xóa Loại sản phẩm';
    modalRef.componentInstance.id = id;
  }
}
