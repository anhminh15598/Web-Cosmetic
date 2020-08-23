import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from 'src/service/error.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuaSanPhamComponent } from './modals/sua-san-pham/sua-san-pham.component';
import { XoaSanPhamComponent } from './modals/xoa-san-pham/xoa-san-pham.component';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HinhAnhSanPhamComponent } from './modals/hinh-anh-san-pham/hinh-anh-san-pham.component';
@Component({
  selector: 'app-san-pham-admin',
  templateUrl: './san-pham-admin.component.html',
  styleUrls: ['./san-pham-admin.component.scss'],
})
export class SanPhamAdminComponent implements OnInit {
  formThemSp: any;
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
    this.formThemSp = this.formBuilder.group({
      tenSp: '',
      idLoaiSp: '',
      moTa: '',
      loiIch: '',
    });
  }
  thuongHieu: any;
  dsLoaiSP: any = [];
  loaiSP: any = [];
  id: any;
  sub: any;
  sanPham: any = [];
  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.getSanPham(this.id);
    });
  }
  getSanPham(id) {
    let _chiTietTH = [];
    let _loaiSP = [];
    this.http
      .get(environment.apiUrl + environment.apiList.DsSanPham + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          _chiTietTH.push(data);
          _chiTietTH.forEach((lsp) => {
            this.thuongHieu = lsp.tenThuongHieu;
            lsp.loaiSps.forEach((element) => {
              _loaiSP.push(element);
            });
          });
          this.dsLoaiSP = _loaiSP;
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  themLoaiSanPham(loaiSP) {
    this.http
      .post<any>(environment.apiUrl + environment.apiList.Sanphams, loaiSP, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        console.log('work');
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }

  onClickSubmit(formThemsp) {
    formThemsp.idLoaiSp = parseInt(formThemsp.idLoaiSp);
    console.log(formThemsp);
    this.themLoaiSanPham(formThemsp);
  }

  moHinhAnhSanPham(id,tenSp){
    const modalRef = this.modalService.open(HinhAnhSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Hình ảnh Sản Phẩm '+tenSp;
    modalRef.componentInstance.tenSp = tenSp;
    modalRef.componentInstance.idTH = this.id;
    modalRef.componentInstance.id = id;
  }
  
  moKichCo(id){
    this.router.navigate(['/admin/quan-ly-kich-co',id]);
  }
  moSuaSp(id, tenSp) {
    const modalRef = this.modalService.open(SuaSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Sửa Sản Phẩm ' + tenSp;
    modalRef.componentInstance.tenSp = tenSp;
    modalRef.componentInstance.idTH = this.id;
    modalRef.componentInstance.id = id;
  }
  moXoaSp(id, tenSp) {
    const modalRef = this.modalService.open(XoaSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Xóa Sản Phẩm';
    modalRef.componentInstance.tenSp = tenSp;
    modalRef.componentInstance.id = id;
  }
}
