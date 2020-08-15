import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';   

@Component({
  selector: 'app-them-loai-san-pham',
  templateUrl: './them-loai-san-pham.component.html',
  styleUrls: ['./them-loai-san-pham.component.scss']
})
export class ThemLoaiSanPhamComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
