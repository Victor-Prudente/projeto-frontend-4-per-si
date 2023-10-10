import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

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

  showAlert = false;

  constructor(private productService: ProductService) {}

  saveProduct() {
    if (this.isFormValid()) {
      this.productService.addProduct({ ...this.product });

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
