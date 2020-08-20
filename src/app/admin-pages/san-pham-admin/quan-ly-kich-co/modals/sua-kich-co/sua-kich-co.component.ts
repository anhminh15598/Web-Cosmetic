import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-sua-kich-co',
  templateUrl: './sua-kich-co.component.html',
  styleUrls: ['./sua-kich-co.component.scss']
})
export class SuaKichCoComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() tenKc;
  @Input() id;
  @Input() idSp;
  suaKichCoForm:any;
  kichCo:any = [];
  constructor(public activeModal: NgbActiveModal,private formBuider: FormBuilder,
    public http: HttpClient,public errorService: ErrorService,) { }

  ngOnInit() {
    this.laykichCoSanPham(this.id);
    this.suaKichCoForm = new FormGroup({
      tenKichCo : new FormControl(),
      giaSp :  new FormControl(),
    })
  }
  laykichCoSanPham(id){
    var _kCSP = [];
    this.http
      .get(environment.apiUrl + environment.apiList.KichCoSanPham + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          console.log(data)
          _kCSP.push(data);
          _kCSP.forEach(lsp => {
              if(lsp.id == id){
                this.kichCo = lsp;
              }
          });
          console.log(this.kichCo);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  suaKichCo(id,kichCo){
    this.http
    .put(environment.apiUrl + environment.apiList.KichCoSanPham + id, kichCo, {
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
    this.suaKichCoForm.value.giaSp = parseInt(this.suaKichCoForm.value.giaSp);
    this.suaKichCoForm.value.idSanPham = this.idSp;
    console.log(this.suaKichCoForm.value);
    this.suaKichCo(this.id,this.suaKichCoForm.value);
  }
}
