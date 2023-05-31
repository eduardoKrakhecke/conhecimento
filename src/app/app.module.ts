import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt'
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { JwtInterceptor } from "./interceptor/jwt.interceptor";
import { FormsModule } from "@angular/forms";
import { NavComponent } from './components/shared/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArticleComponent } from './components/article/article/article.component';
import { CardComponent } from './components/shared/card/card.component';
import { CategoryComponent } from './components/category/category.component';
import { ToastComponent } from './components/shared/toast/toast.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { ComponentsComponent } from './components/components/components.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    ArticleComponent,
    CardComponent,
    CategoryComponent,
    ToastComponent,
    ModalComponent,
    ComponentsComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
