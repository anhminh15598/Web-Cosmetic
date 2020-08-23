import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanPhamAdminComponent } from './san-pham-admin.component';
import { QuanLyKichCoModule } from './quan-ly-kich-co/quan-ly-kich-co.module';
import "@angular/compiler";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuaSanPhamComponent } from './modals/sua-san-pham/sua-san-pham.component';
import { XoaSanPhamComponent } from './modals/xoa-san-pham/xoa-san-pham.component';
import { HinhAnhSanPhamComponent } from './modals/hinh-anh-san-pham/hinh-anh-san-pham.component';

@NgModule({
  imports: [CommonModule,QuanLyKichCoModule,NgxPaginationModule,NgbModule,ReactiveFormsModule],
  declarations: [SanPhamAdminComponent,SuaSanPhamComponent,XoaSanPhamComponent,HinhAnhSanPhamComponent],
  exports: [SanPhamAdminComponent],
  entryComponents:[
    SuaSanPhamComponent,
    XoaSanPhamComponent,
    HinhAnhSanPhamComponent
  ]
})
export class SanPhamAdminModule {}
