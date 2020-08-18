import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sua-san-pham',
  templateUrl: './sua-san-pham.component.html',
  styleUrls: ['./sua-san-pham.component.scss']
})
export class SuaSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
