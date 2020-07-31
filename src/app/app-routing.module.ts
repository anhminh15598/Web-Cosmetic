import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { DangNhapComponent } from './pages/dang-nhap/dang-nhap.component';
import { HomeComponent } from './pages/home/home.component';
import { ThuongHieuComponent } from './pages/thuong-hieu/thuong-hieu.component';
import { SanPhamComponent } from './pages/san-pham/san-pham.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'thuongHieu',
        component: ThuongHieuComponent,
      },
      {
        path: 'thuongHieu/sanPham',
        component: SanPhamComponent,
      },
    ],
  },
  {
    path: 'dangNhap',
    component: DangNhapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
