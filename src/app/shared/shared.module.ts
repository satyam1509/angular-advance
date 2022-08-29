import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { BlogLayoutComponent } from './components/blog/blog-layout/blog-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/admin/header/header.component';
import { LeftMenuComponent } from './components/admin/left-menu/left-menu.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    BlogLayoutComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ReactiveFormsModule,
    HeaderComponent,
    LeftMenuComponent,
    AdminLayoutComponent

  ]
})
export class SharedModule { }
