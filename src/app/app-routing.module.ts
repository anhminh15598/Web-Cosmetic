import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { SanPhamAdminComponent } from './admin-pages/san-pham-admin/san-pham-admin.component';
import { AdminLayoutComponent } from './admin-pages/admin-core/admin-layout/admin-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GioiThieuCongTyComponent } from './pages/gioi-thieu-cong-ty/gioi-thieu-cong-ty.component';
import { AdminGuard } from 'src/guards/admin.guard';
import { SigninComponent } from './authentication/signin/signin.component';
import { QuanLyThuongHieuComponent } from './admin-pages/quan-ly-thuong-hieu/quan-ly-thuong-hieu.component';
import { LoaiSanPhamAdminComponent } from './admin-pages/loai-san-pham-admin/loai-san-pham-admin.component';
import { HomeAdminComponent } from './admin-pages/home-admin/home-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { QuanLyKichCoComponent } from './admin-pages/san-pham-admin/quan-ly-kich-co/quan-ly-kich-co.component';
import { QuanLyKichCoModule } from './admin-pages/san-pham-admin/quan-ly-kich-co/quan-ly-kich-co.module';


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
    canActivate: [AdminGuard],

    children: [
      { path: 'home', component: HomeAdminComponent },
      { path: 'quan-ly-thuong-hieu', component: QuanLyThuongHieuComponent },
      {
        path: 'san-pham-admin/:id',
        component: SanPhamAdminComponent,
      },
      {
        path: 'loai-san-pham-admin/:id',
        component: LoaiSanPhamAdminComponent,
      },
      {
        path: 'quan-ly-kich-co/:id',
        component: QuanLyKichCoComponent,
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
