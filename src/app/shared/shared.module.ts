import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlogLayoutComponent } from './components/blog-layout/blog-layout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    BlogLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class SharedModule { }
