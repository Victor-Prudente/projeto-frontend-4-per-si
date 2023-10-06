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
    value: null,
    stock: null,
    measurementUnity: '',
    provider: '',
    active: false,
  };
  productSaved: Product | null = null;

  products: Product[] = [];
  showAlert = false;
  saveProduct() {
    if (this.isFormValid()) {
      this.products.push({ ...this.product });
      console.log(this.productSaved);
      localStorage.setItem('products', JSON.stringify(this.products));

      this.product = {
        desc: '',
        value: null,
        stock: null,
        measurementUnity: '',
        provider: '',
        active: false,
      };
      this.showAlert = false;
    } else {
      this.showAlert = true;
    }
  }
  isFormValid(): boolean {
    return (
      this.product.desc !== '' &&
      this.product.value !== null &&
      this.product.stock !== null &&
      this.product.measurementUnity !== '' &&
      this.product.provider !== ''
    );
  }
}
