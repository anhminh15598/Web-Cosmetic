import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-sua-thuong-hieu',
  templateUrl: './sua-thuong-hieu.component.html',
  styleUrls: ['./sua-thuong-hieu.component.scss']
})
export class SuaThuongHieuComponent implements OnInit {
  thuongHieu:any = [];
  suaThuongHieuForm : FormGroup;
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() id;
  
  constructor(public activeModal: NgbActiveModal,private formBuider: FormBuilder,
    public http: HttpClient,public errorService: ErrorService,) { 
      
      
    }
  ngOnInit() {
    this.layThuongHieu(this.id);
    this.suaThuongHieuForm = new FormGroup({
      tenThuongHieu : new FormControl(),
      moTa :  new FormControl(),
      hinhAnh : new FormControl(),
    })
  }
  layThuongHieu(id){
    var _dsTH = [];
    this.http
      .get(environment.apiUrl + environment.apiList.DsThuongHieu, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (data) => {
          
          _dsTH.push(data);
          _dsTH.forEach(th => {
            th.forEach(element => {
              if(element.id == id){
                this.thuongHieu = element;
              }
            });
            
          });
          console.log(this.thuongHieu);
        },
        (error) => {
          this.errorService.showError(error);
        }
      );
  }
  suaThuongHieu(id,thuongHieu) {
    this.http
      .put(environment.apiUrl + environment.apiList.DsThuongHieu+ id, thuongHieu, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        console.log("work");
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }
  onSubmit(){
    this.suaThuongHieu(this.thuongHieu.id,this.suaThuongHieuForm.value);
  }
}
