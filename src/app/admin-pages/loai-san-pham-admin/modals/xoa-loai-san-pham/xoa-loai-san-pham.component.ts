import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';   

@Component({
  selector: 'app-xoa-loai-san-pham',
  templateUrl: './xoa-loai-san-pham.component.html',
  styleUrls: ['./xoa-loai-san-pham.component.scss']
})
export class XoaLoaiSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() id;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
