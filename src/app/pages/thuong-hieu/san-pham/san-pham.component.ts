import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {
  ten:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  ngDoCheck(){
    this.ten = this.route.snapshot.paramMap.get("id");
  }
}
