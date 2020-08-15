import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongHieuComponent } from './thuong-hieu.component';
import { RouterModule } from '@angular/router';
import { ThuongHieuRoutes } from './thuong-hieu.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { SanPhamComponent } from './san-pham/san-pham.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ThuongHieuRoutes),
    NgxPaginationModule,
  ],
  declarations: [
    ThuongHieuComponent,
    SanPhamComponent
  ],
  exports: [],
})
export class ThuongHieuModule { }
