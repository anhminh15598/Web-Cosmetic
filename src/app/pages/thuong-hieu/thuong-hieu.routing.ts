import { Routes, RouterModule } from '@angular/router';
import {ThuongHieuComponent} from './thuong-hieu.component';
import { SanPhamComponent } from './san-pham/san-pham.component';



export const ThuongHieuRoutes: Routes = [
    { path: '', component: ThuongHieuComponent },
    { path: 'san-pham/:id', component: SanPhamComponent }
    
];
