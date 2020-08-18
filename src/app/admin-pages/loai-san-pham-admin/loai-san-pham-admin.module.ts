import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiSanPhamAdminComponent } from './loai-san-pham-admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuaLoaiSanPhamComponent } from './modals/sua-loai-san-pham/sua-loai-san-pham.component';
import { ThemLoaiSanPhamComponent } from './modals/them-loai-san-pham/them-loai-san-pham.component';
import { XoaLoaiSanPhamComponent } from './modals/xoa-loai-san-pham/xoa-loai-san-pham.component';

import "@angular/compiler"
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  declarations: [
    LoaiSanPhamAdminComponent,
    ThemLoaiSanPhamComponent,
    SuaLoaiSanPhamComponent,
    XoaLoaiSanPhamComponent,
    ]
  ,
  entryComponents:[
    ThemLoaiSanPhamComponent,
    SuaLoaiSanPhamComponent,
    XoaLoaiSanPhamComponent,
  ]
})
export class LoaiSanPhamAdminModule { 
  
}
