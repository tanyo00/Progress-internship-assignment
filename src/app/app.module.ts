import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InstockComponent } from './instock/instock.component';
import { OutofstockComponent } from './outofstock/outofstock.component';
import { AllproductsComponent } from './allproducts/allproducts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InstockComponent,
    OutofstockComponent,
    AllproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
