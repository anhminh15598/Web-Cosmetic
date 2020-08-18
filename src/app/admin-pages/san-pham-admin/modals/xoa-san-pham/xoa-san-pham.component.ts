import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-xoa-san-pham',
  templateUrl: './xoa-san-pham.component.html',
  styleUrls: ['./xoa-san-pham.component.scss']
})
export class XoaSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
