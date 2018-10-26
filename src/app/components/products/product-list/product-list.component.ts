import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  allProducts: any;
  allCollections: any;
  filterActive: Boolean = false;
  applyFilter: string;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCollections();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.allProducts = data;
    });
  }

  getCollections() {
    this.productService.getAllCollections().subscribe((data) => {
      this.allCollections = data;
    });
  }

  filter(elm) {
    this.filterActive = false;
    this.applyFilter = '';
    if (elm) {
      elm = this.applyFilter;
      this.filterActive = true;
    }
  }

}
