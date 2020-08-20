import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';   
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-them-loai-san-pham',
  templateUrl: './them-loai-san-pham.component.html',
  styleUrls: ['./them-loai-san-pham.component.scss']
})
export class ThemLoaiSanPhamComponent implements OnInit {
  formThemLsp;
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() idTH;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public errorService: ErrorService,

    ) 
    {
      this.formThemLsp = this.formBuilder.group({
        tenLoaiSp: '',
        moTa: '',
      });
    }

  ngOnInit() {
    
  }
  themLoaiSanPham(idTH,loaiSP) {
    this.http
      .post<any>(environment.apiUrl + environment.apiList.LoaiSanPham + idTH, loaiSP, {
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
  onClickSubmit(data) {
    this.themLoaiSanPham(this.idTH,this.formThemLsp.value);
  }
}
