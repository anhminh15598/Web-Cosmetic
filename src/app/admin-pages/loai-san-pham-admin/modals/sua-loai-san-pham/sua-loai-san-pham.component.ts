import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';   
@Component({
  selector: 'app-sua-loai-san-pham',
  templateUrl: './sua-loai-san-pham.component.html',
  styleUrls: ['./sua-loai-san-pham.component.scss']
})
export class SuaLoaiSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
