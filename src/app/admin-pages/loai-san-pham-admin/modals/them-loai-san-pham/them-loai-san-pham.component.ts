import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';   
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-them-loai-san-pham',
  templateUrl: './them-loai-san-pham.component.html',
  styleUrls: ['./them-loai-san-pham.component.scss']
})
export class ThemLoaiSanPhamComponent implements OnInit {
  formThemLsp;
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public errorService: ErrorService,
    ) 
    {
      this.formThemLsp = this.formBuilder.group({
        tenLSp: '',
        moTa: ''
      });
    }

  ngOnInit() {
  }
  onClickSubmit(data) {
    this.http
    .post<any>(
      'https://api.usbeauty.vn/api/ThuongHieux/',
      data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    )
    .subscribe((data) => {
      this.activeModal.close('Close click')
    }),
    (error) => {
      this.errorService.showError(error);
    };
 }
}
