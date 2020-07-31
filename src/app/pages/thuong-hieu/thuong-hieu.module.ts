import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThuongHieuRoutes } from './thuong-hieu.routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ThuongHieuRoutes)],
})
export class ThuongHieuModule {}
