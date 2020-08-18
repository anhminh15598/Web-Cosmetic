import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-them-kich-co',
  templateUrl: './them-kich-co.component.html',
  styleUrls: ['./them-kich-co.component.scss']
})
export class ThemKichCoComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
