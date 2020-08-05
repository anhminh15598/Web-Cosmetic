import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanPhamAdminComponent } from './san-pham-admin.component';
import { ThemSanPhamAdminComponent } from './them-san-pham-admin/them-san-pham-admin.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SanPhamAdminComponent, ThemSanPhamAdminComponent],
  exports: [SanPhamAdminComponent],
})
export class SanPhamAdminModule {}
