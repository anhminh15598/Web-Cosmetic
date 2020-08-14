import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyThuongHieuComponent } from './quan-ly-thuong-hieu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [QuanLyThuongHieuComponent]
})
export class QuanLyThuongHieuModule { 
  
}
