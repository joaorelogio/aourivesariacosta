import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
