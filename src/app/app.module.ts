import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProdutListComponent } from './products/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component'
import { WelcomeComponent } from './home/welcome.component';
import{RouterModule} from '@angular/router'
import { ProductDetailsGuard } from './products/product-details.guard';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
