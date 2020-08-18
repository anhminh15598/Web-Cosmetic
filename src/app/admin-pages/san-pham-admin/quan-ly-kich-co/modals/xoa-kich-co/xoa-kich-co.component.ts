import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-xoa-kich-co',
  templateUrl: './xoa-kich-co.component.html',
  styleUrls: ['./xoa-kich-co.component.scss']
})
export class XoaKichCoComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
