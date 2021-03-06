import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { LoaiSanPhamAdminComponent } from '../loai-san-pham-admin/loai-san-pham-admin.component';
import { SuaThuongHieuComponent } from './modals/sua-thuong-hieu/sua-thuong-hieu.component';
import { XoaThuongHieuComponent } from './modals/xoa-thuong-hieu/xoa-thuong-hieu.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quan-ly-thuong-hieu',
  templateUrl: './quan-ly-thuong-hieu.component.html',
  styleUrls: ['./quan-ly-thuong-hieu.component.scss']
})
export class QuanLyThuongHieuComponent implements OnInit {
  themThuongHieuForm: FormGroup;
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService,
    private modalService: NgbModal
  ) {}

  // tenThuongHieu: string = '1';
  // moTa: string = '2';
  postId;
  p: any;
  xacNhan: any = false;

  themThuongHieu() {
    console.log(this.themThuongHieuForm.value);
    this.themThuongHieuForm.markAllAsTouched();
    if (this.themThuongHieuForm.invalid) return;
    this.http
      .post<any>(
        environment.apiUrl + environment.apiList.DsThuongHieu,
        this.themThuongHieuForm.value,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        }
      )
      .subscribe((data) => {
        this.postId = data.id;
        this.getThuongHieu();
        this.xacNhan === true;
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }

  xoaThuongHieu(id) {
    console.log("xóa");
    this.http
      .delete(environment.apiUrl + environment.apiList.DsThuongHieu + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        console.log(data);
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }

  
  thuongHieu: any = [];
  getThuongHieu() {
    this.http
      .get(environment.apiUrl + environment.apiList.DsThuongHieu, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.thuongHieu = data;
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
    }

  ngOnInit(): void {
    this.getThuongHieu();
    this.themThuongHieuForm = new FormGroup({
      tenThuongHieu: new FormControl('', [Validators.required]),
      moTa: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    });
  }
  ngDoCheck() {}
  moLSP(id){
    this.router.navigate(['/admin/loai-san-pham-admin',id]);
  }
  moSuaTH(id,tenTH){
    const modalRef = this.modalService.open(SuaThuongHieuComponent);
    modalRef.componentInstance.my_modal_title = "Sửa Thương Hiệu "+tenTH;
    modalRef.componentInstance.my_modal_content = 'I am your content';
    modalRef.componentInstance.id = id;
  }
  moXoaTH(id,tenTH){
    const modalRef = this.modalService.open(XoaThuongHieuComponent);
    modalRef.componentInstance.my_modal_title = "Xóa thương hiệu "+tenTH;
    modalRef.componentInstance.tenTH = tenTH;
    modalRef.componentInstance.id = id;
  }
}
