import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongHieuAdminComponent } from './thuong-hieu-admin.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    FormsModule,
    ReactiveFormsModule,
    ThuongHieuAdminComponent
  ],
  exports: [],
})
export class ThuongHieuAdminModule { }