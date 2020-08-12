import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongHieuComponent } from './thuong-hieu.component';
import { RouterModule } from '@angular/router';
import { ThuongHieuRoutes } from './thuong-hieu.routing';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(ThuongHieuRoutes),
    NgxPaginationModule
  ],
  declarations: [
    ThuongHieuComponent,
  ],
  exports: [],
})
export class ThuongHieuModule { }
