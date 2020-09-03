import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanPhamComponent } from './san-pham.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { LightboxModule } from 'ngx-lightbox';
import { FilterPipe } from 'src/pipe/filter.pipe';


@NgModule({
  imports: [CommonModule, NgxPaginationModule, RouterModule, LightboxModule],
  declarations: [SanPhamComponent,FilterPipe],
  exports: [],
})
export class ThuongHieuModule {}
