import { Component } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css'],
})
export class ProductRegistrationComponent {
  product: Product = {
    desc: '',
    value: 0,
    stock: 0,
    measurementUnity: '',
    provider: '',
    active: false,
  };
  productSaved: Product | null = null;

  
  products: Product[] = [];

  saveProduct() {
    this.products.push({ ...this.product });
    console.log(this.productSaved);
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
