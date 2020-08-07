import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { DangNhapComponent } from './admin-pages/dang-nhap/dang-nhap.component';
import { SanPhamAdminComponent } from './admin-pages/san-pham-admin/san-pham-admin.component';
import { AdminLayoutComponent } from './admin-pages/admin-core/admin-layout/admin-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GioiThieuCongTyComponent } from './pages/gioi-thieu-cong-ty/gioi-thieu-cong-ty.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { AdminGuard } from 'src/guards/admin.guard';

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
        path: 'thuong-hieu/:id',
        loadChildren: () =>
          import('./pages/thuong-hieu/thuong-hieu.module').then(
            (m) => m.ThuongHieuModule
          ),
      },
      {
        path: 'gioi-thieu-cong-ty',
        component: GioiThieuCongTyComponent,
      },
      {
        path: 'lien-he',
        component: LienHeComponent,
      },
    ],
  },
  {
    path: 'dang-nhap',
    component: SigninComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate:[AdminGuard],
    children: [
      {
        path: '',
        component: SanPhamAdminComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
