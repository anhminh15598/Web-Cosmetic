import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { DangNhapComponent } from './pages/dang-nhap/dang-nhap.component';
import { SanPhamComponent } from './pages/san-pham/san-pham.component';
import { ChiTietSanPhamComponent } from './pages/chi-tiet-san-pham/chi-tiet-san-pham.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { GioiThieuCongTyComponent } from './pages/gioi-thieu-cong-ty/gioi-thieu-cong-ty.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ThuongHieuComponent } from './pages/thuong-hieu/thuong-hieu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    DangNhapComponent,
    SanPhamComponent,
    ChiTietSanPhamComponent,
    LienHeComponent,
    GioiThieuCongTyComponent,
    LayoutComponent,
    ThuongHieuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
