import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutComponent, FacebookModule.forRoot()],
})
export class LayoutModule {}
