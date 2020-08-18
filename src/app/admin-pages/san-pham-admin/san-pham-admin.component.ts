import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from 'src/service/error.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuaSanPhamComponent } from './modals/sua-san-pham/sua-san-pham.component';
import { XoaSanPhamComponent } from './modals/xoa-san-pham/xoa-san-pham.component';
@Component({
  selector: 'app-san-pham-admin',
  templateUrl: './san-pham-admin.component.html',
  styleUrls: ['./san-pham-admin.component.scss'],
})
export class SanPhamAdminComponent implements OnInit {
  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService,
    private route: ActivatedRoute, 
    private modalService: NgbModal 
  ) {}
  id:any;
  sub:any;
  sanPham: any = [];
  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.getSanPham();;
    }); 
  }
  getSanPham() {
    this.http
      .get('https://api.usbeauty.vn/api/sanphams/', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          this.sanPham = data;

          console.log(data);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  moKichCo(id){
    this.router.navigate(['/admin/quan-ly-kich-co',id]);
  }
  moSuaSp() {
    const modalRef = this.modalService.open(SuaSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Sửa Sản Phẩm';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
  moXoaSp(){
    const modalRef = this.modalService.open(XoaSanPhamComponent);
    modalRef.componentInstance.my_modal_title = 'Xóa Sản Phẩm';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
}
