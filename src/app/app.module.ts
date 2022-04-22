import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,navlinks } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductsService } from './products.service';
import { CategoryService } from './services/category.service';
@NgModule({
  declarations: [
    AppComponent,
    navlinks,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
