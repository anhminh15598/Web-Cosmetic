import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';  
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from 'src/service/error.service';
@Component({
  selector: 'app-xoa-san-pham',
  templateUrl: './xoa-san-pham.component.html',
  styleUrls: ['./xoa-san-pham.component.scss']
})
export class XoaSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() id;
  @Input() tenSp;
  constructor(public activeModal: NgbActiveModal,
    public http: HttpClient,
    public errorService: ErrorService,
    ) { }

  ngOnInit() {
    
  }
  xoaSp(){
    this.http
      .delete(environment.apiUrl + environment.apiList.Sanphams + this.id, {
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
}
