import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { MenuComponent } from './pages/common/menu/menu.component';
import { LogoutModalComponent } from './pages/common/modal/logout-modal.component';
import { DelModalComponent } from './pages/common/modal/del-modal.component';

import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthenticationService, UserService, AlertService } from './services/index';
import { Routing } from './app.routing';
import { GlobalVal } from './global-val/global.val';
import { AuthInterceptor } from './guards/auth.interceptor';
import { CreateUpdateUserComponent } from './pages/user/createupdateuser/create-update.user.component';
import { SearchUserComponent } from './pages/user/searchuser/search.user.component';


import { AlertComponent } from './directives/alert.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    CreateUpdateUserComponent,
    LogoutModalComponent,
    DelModalComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataTablesModule,
    Routing,
    FormsModule

  ],
  providers: [
      GlobalVal,
      UserService,
      AuthenticationService,
      AlertService,
      AuthGuard,
      {
        provide : HTTP_INTERCEPTORS,
        useClass : JwtInterceptor,
        multi : true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
