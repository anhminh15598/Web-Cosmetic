import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-sua-san-pham',
  templateUrl: './sua-san-pham.component.html',
  styleUrls: ['./sua-san-pham.component.scss']
})
export class SuaSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() tenSp;
  @Input() id;
  @Input() idTH;
  loaiSanPham:any;
  suaSanPhamForm:any;
  dsloaiSP:any = [];
  sanPham:any = [];
  constructor(public activeModal: NgbActiveModal,private formBuider: FormBuilder,
    public http: HttpClient,public errorService: ErrorService,) { }

  ngOnInit() {
    this.laySanPham(this.id);
    this.layDsLoaiSp(this.idTH);
    this.suaSanPhamForm = new FormGroup({
      tenSp : new FormControl(),
      idLoaiSp :  new FormControl(),
      loiIch : new FormControl(),
      moTa : new FormControl(),
    })
  }
  laySanPham(id){
    var _SP = [];
    this.http
      .get(environment.apiUrl + environment.apiList.Sanphams + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          _SP.push(data);
          _SP.forEach(element => {
            this.sanPham = element;
          });
          
          console.log(this.sanPham);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
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
          console.log(this.dsloaiSP);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  suaSanPham(id,SanPham) {
    console.log(SanPham);
    this.http
      .put(environment.apiUrl + environment.apiList.Sanphams + id, SanPham, {
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
  onSubmit(id){
    this.suaSanPhamForm.value.idLoaiSp = parseInt(this.suaSanPhamForm.value.idLoaiSp);
    this.suaSanPham(id,this.suaSanPhamForm.value);
  }
}
