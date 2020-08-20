import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyKichCoComponent } from './quan-ly-kich-co.component';
import { ThemKichCoComponent } from './modals/them-kich-co/them-kich-co.component';
import { XoaKichCoComponent } from './modals/xoa-kich-co/xoa-kich-co.component';
import { SuaKichCoComponent } from './modals/sua-kich-co/sua-kich-co.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule
  ],  
  declarations: [
    QuanLyKichCoComponent,
    ThemKichCoComponent,
    XoaKichCoComponent,
    SuaKichCoComponent
  ]
  ,
  entryComponents:[
    ThemKichCoComponent,
    XoaKichCoComponent,
    SuaKichCoComponent,
  ]
})
export class QuanLyKichCoModule { }
