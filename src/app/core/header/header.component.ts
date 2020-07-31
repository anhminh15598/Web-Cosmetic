import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  listThuongHieu = [{id:"1", tenThuongHieu:'thuongHieu1'},{id:"2", tenThuongHieu:'thuongHieu2'}];
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onSelectList(id){
    this.router.navigate(['/thuong-hieu/'+id]);
  }
}
