import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AfterLoginGuard } from './shared/guards/after-login.guard';
import { BeforeLoginGuard } from './shared/guards/before-login.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), 
    canActivate:[BeforeLoginGuard]
  },
 
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
    canActivate:[AfterLoginGuard]
  },

  {
    path:"**",
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
