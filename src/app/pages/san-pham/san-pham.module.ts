import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SanPhamRoutes } from './san-pham.routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(SanPhamRoutes)],
})
export class SanPhamModule {}
