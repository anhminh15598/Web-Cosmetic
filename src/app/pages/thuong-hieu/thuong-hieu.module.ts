import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongHieuComponent } from './thuong-hieu.component';
import { RouterModule } from '@angular/router';
import { ThuongHieuRoutes } from './thuong-hieu.routing';
import { NgxPaginationModule } from 'ngx-pagination';
<<<<<<< HEAD
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
=======
import { FilterPipe } from 'src/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/app/directive/highlight.directive';
import { SanPhamComponent } from './san-pham/san-pham.component';
>>>>>>> master

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ThuongHieuRoutes),
    NgxPaginationModule,
<<<<<<< HEAD
    Ng2SearchPipeModule,
    FormsModule,
  ],
  declarations: [ThuongHieuComponent],
  exports: [ThuongHieuComponent],
=======
    FormsModule,
  ],
  declarations: [
    ThuongHieuComponent,
    SanPhamComponent,
    FilterPipe,
    HighlightDirective,
  ],
  exports: [],
>>>>>>> master
})
export class ThuongHieuModule {}
