import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongHieuComponent } from './thuong-hieu.component';
import { RouterModule } from '@angular/router';
import { ThuongHieuRoutes } from './thuong-hieu.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ThuongHieuRoutes),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  declarations: [ThuongHieuComponent],
  exports: [ThuongHieuComponent],
})
export class ThuongHieuModule {}
