import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sua-kich-co',
  templateUrl: './sua-kich-co.component.html',
  styleUrls: ['./sua-kich-co.component.scss']
})
export class SuaKichCoComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
