import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';   
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-them-kich-co',
  templateUrl: './them-kich-co.component.html',
  styleUrls: ['./them-kich-co.component.scss']
})
export class ThemKichCoComponent implements OnInit {
  formThemKichCo;
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() idSp;
  @Input() tenKc;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public errorService: ErrorService,

    ) 
    {
      this.formThemKichCo= this.formBuilder.group({
        tenKichCo: '',
        giaSp: '',
      });
    }

  ngOnInit() {
    
  }
  themKichCo(kichCoSP) {
    this.http
      .post<any>(environment.apiUrl + environment.apiList.KichCoSanPham , kichCoSP, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((data) => {
        console.log(typeof   kichCoSP);
        console.log("work");
        this.activeModal.close('Close click');
      }),
      (error) => {
        this.errorService.showError(error);
      };
  }
  onClickSubmit(data) {
    this.formThemKichCo.value.giaSp = parseInt(this.formThemKichCo.value.giaSp);
    this.formThemKichCo.value.idSanPham = this.idSp;
    this.themKichCo(this.formThemKichCo.value);
  }

}
