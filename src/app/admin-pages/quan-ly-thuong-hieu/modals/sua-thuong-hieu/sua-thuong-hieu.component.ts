import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sua-thuong-hieu',
  templateUrl: './sua-thuong-hieu.component.html',
  styleUrls: ['./sua-thuong-hieu.component.scss']
})
export class SuaThuongHieuComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    
  }

}
