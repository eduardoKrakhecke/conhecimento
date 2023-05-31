import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./guard/auth.guard";
import { ProfileComponent } from "@app/components/profile/profile.component";
import { ArticleComponent } from "@app/components/article/article/article.component";
import { CategoryComponent } from "@app/components/category/category.component";
import { ComponentsComponent } from "@app/components/components/components.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard] },
  { path: 'articles', component: ArticleComponent,  canActivate: [AuthGuard] },
  { path: 'categories', component: CategoryComponent,  canActivate: [AuthGuard] },
  { path: 'components', component: ComponentsComponent,  canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
