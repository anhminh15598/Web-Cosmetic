import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { GioiThieuCongTyComponent } from './pages/gioi-thieu-cong-ty/gioi-thieu-cong-ty.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'thuong-hieu/:tenThuongHieu',
        loadChildren: () => import('./pages/thuong-hieu/thuong-hieu.module').then(m => m.ThuongHieuModule),
      },
      {
        path: 'lien-he',
        component: LienHeComponent,
      },
      {
        path: 'gioi-thieu-cong-ty',
        component: GioiThieuCongTyComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
