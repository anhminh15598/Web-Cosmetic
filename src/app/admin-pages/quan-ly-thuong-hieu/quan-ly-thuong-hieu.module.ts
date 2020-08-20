import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyThuongHieuComponent } from './quan-ly-thuong-hieu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoaiSanPhamAdminModule } from '../loai-san-pham-admin/loai-san-pham-admin.module';
import "@angular/compiler"
import { SuaThuongHieuComponent } from './modals/sua-thuong-hieu/sua-thuong-hieu.component';
import { XoaThuongHieuComponent } from './modals/xoa-thuong-hieu/xoa-thuong-hieu.component';
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    LoaiSanPhamAdminModule
  ],
  declarations: [
    QuanLyThuongHieuComponent,
    XoaThuongHieuComponent,
    SuaThuongHieuComponent,
  ]
  ,
  entryComponents:[
    XoaThuongHieuComponent,
    SuaThuongHieuComponent,
  ]
})
export class QuanLyThuongHieuModule { 
  
}
