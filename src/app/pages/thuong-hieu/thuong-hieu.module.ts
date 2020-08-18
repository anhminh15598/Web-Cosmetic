import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongHieuComponent } from './thuong-hieu.component';
import { RouterModule } from '@angular/router';
import { ThuongHieuRoutes } from './thuong-hieu.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/app/directive/highlight.directive';
import { SanPhamComponent } from './san-pham/san-pham.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ThuongHieuRoutes),
    NgxPaginationModule,
    FormsModule,
  ],
  declarations: [
    ThuongHieuComponent,
    SanPhamComponent,
    FilterPipe,
    HighlightDirective,
  ],
  exports: [],
})
export class ThuongHieuModule {}
