import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-thuong-hieu',
  templateUrl: './thuong-hieu.component.html',
  styleUrls: ['./thuong-hieu.component.scss']
})
export class ThuongHieuComponent implements OnInit {
  listThuongHieu = [{id:"1", tenThuongHieu:'thuongHieu1'},{id:"2", tenThuongHieu:'thuongHieu2'}];
  ten:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  ngDoCheck(){

    this.ten = this.route.snapshot.paramMap.get("tenThuongHieu");
  }
}
