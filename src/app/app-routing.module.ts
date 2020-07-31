import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { DangNhapComponent } from './pages/dang-nhap/dang-nhap.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.component.html',
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
