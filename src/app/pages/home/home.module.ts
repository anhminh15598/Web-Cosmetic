import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(HomeRoutes)],
  exports: [],
})
export class HomeModule {}
