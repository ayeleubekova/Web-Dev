import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ProductsComponent],
  bootstrap: [ProductsComponent],
})
export class AppModule { }
