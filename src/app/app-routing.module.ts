import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { GioiThieuCongTyComponent } from './pages/gioi-thieu-cong-ty/gioi-thieu-cong-ty.component';
import { DangNhapComponent } from './admin-pages/dang-nhap/dang-nhap.component';
import { SanPhamAdminComponent } from './admin-pages/san-pham-admin/san-pham-admin.component';
import { AdminLayoutComponent } from './admin-pages/admin-core/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'thuong-hieu/:tenThuongHieu',
        loadChildren: () =>
          import('./pages/thuong-hieu/thuong-hieu.module').then(
            (m) => m.ThuongHieuModule
          ),
      },
      {
        path: 'lien-he',
        component: LienHeComponent,
      },
      {
        path: 'gioi-thieu-cong-ty',
        component: GioiThieuCongTyComponent,
      },
    ],
  },
  {
    path: 'dang-nhap',
    component: DangNhapComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: SanPhamAdminComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
