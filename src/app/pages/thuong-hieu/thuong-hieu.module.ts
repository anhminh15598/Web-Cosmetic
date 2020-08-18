import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongHieuComponent } from './thuong-hieu.component';
import { RouterModule } from '@angular/router';
import { ThuongHieuRoutes } from './thuong-hieu.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/app/directive/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ThuongHieuRoutes),
    NgxPaginationModule,
    FormsModule,
  ],
  declarations: [ThuongHieuComponent, FilterPipe, HighlightDirective],
  exports: [],
})
export class ThuongHieuModule {}
