import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { ChiTietSanPhamComponent } from './pages/chi-tiet-san-pham/chi-tiet-san-pham.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { GioiThieuCongTyComponent } from './pages/gioi-thieu-cong-ty/gioi-thieu-cong-ty.component';
import { LayoutComponent } from './core/layout/layout.component';
import { AdminFooterComponent } from './admin-pages/admin-core/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-pages/admin-core/admin-header/admin-header.component';
import { AdminLayoutComponent } from './admin-pages/admin-core/admin-layout/admin-layout.component';
import { SliderComponent } from './core/slider/slider.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminSidebarComponent } from './admin-pages/admin-core/admin-sidebar/admin-sidebar.component';
import { SanPhamAdminModule } from './admin-pages/san-pham-admin/san-pham-admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/Interceptors/auth.interceptor';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeAdminComponent } from './admin-pages/home-admin/home-admin.component';
import { QuanLyThuongHieuModule } from './admin-pages/quan-ly-thuong-hieu/quan-ly-thuong-hieu.module';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { SpinnerComponent } from './core/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    ChiTietSanPhamComponent,
    LienHeComponent,
    GioiThieuCongTyComponent,
    LayoutComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminLayoutComponent,
    NotFoundComponent,
    AdminSidebarComponent,
    HomeAdminComponent,
    SpinnerComponent,
  ],
  imports: [
    LightboxModule,
    BrowserModule,
    AppRoutingModule,
    SanPhamAdminModule,
    HttpClientModule,
    AuthenticationModule,
    QuanLyThuongHieuModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
