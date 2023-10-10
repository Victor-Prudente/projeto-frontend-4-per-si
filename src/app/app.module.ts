import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { ProductService } from './components/services/product.service';

@NgModule({
  declarations: [AppComponent, ProductRegistrationComponent, ProductListComponent, HomepageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
