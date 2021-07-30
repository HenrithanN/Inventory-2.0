import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
