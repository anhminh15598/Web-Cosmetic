import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongHieuComponent } from './thuong-hieu.component';
import { RouterModule } from '@angular/router';
import { ThuongHieuRoutes } from './thuong-hieu.routing';
import { } from './san-pham/san-pham.component'
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(ThuongHieuRoutes)
  ],
  declarations: [
    ThuongHieuComponent
  ],
  exports: [],
})
export class ThuongHieuModule { }
