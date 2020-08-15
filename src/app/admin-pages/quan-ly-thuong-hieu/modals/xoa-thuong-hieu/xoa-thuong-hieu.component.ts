import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-xoa-thuong-hieu',
  templateUrl: './xoa-thuong-hieu.component.html',
  styleUrls: ['./xoa-thuong-hieu.component.scss']
})
export class XoaThuongHieuComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
