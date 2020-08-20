import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-sua-loai-san-pham',
  templateUrl: './sua-loai-san-pham.component.html',
  styleUrls: ['./sua-loai-san-pham.component.scss']
})
export class SuaLoaiSanPhamComponent implements OnInit {
  loaiSanPham:any = [];
  suaLoaiSanPhamForm : FormGroup;
  @Input() my_modal_title;
  @Input() id;
  @Input() tenLSP;

  constructor(public activeModal: NgbActiveModal,private formBuider: FormBuilder,
    public http: HttpClient,public errorService: ErrorService,) { 
      
      
    }
  ngOnInit() {
    this.layLoaiSanPham(this.id);
    this.suaLoaiSanPhamForm = new FormGroup({
      tenLoaiSp : new FormControl(),
      moTa :  new FormControl(),
    })
  }
  layLoaiSanPham(id){
    var _dsLSP = [];
    this.http
      .get(environment.apiUrl + environment.apiList.LoaiSanPham + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          console.log(data)
          _dsLSP.push(data);
          _dsLSP.forEach(lsp => {
              if(lsp.id == id){
                this.loaiSanPham = lsp;
              }
          });
          console.log(this.loaiSanPham);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  suaLoaiSanPham(id,LoaiSanPham) {
    this.http
      .put(environment.apiUrl + environment.apiList.LoaiSanPham + id, LoaiSanPham, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        console.log("work");
        this.activeModal.close('Close click');
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }
  onSubmit(){
    this.suaLoaiSanPham(this.id,this.suaLoaiSanPhamForm.value);
  }
}
