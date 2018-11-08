import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  title: string;
  subtitle: string;
  allProducts: any;
  pager: any = {};
  pagedProducts: any[];
  allCollections: any;
  filterActive: Boolean = false;
  applyFilter: string;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.title = 'Produtos';
    this.subtitle = 'Coleções';
    this.getProducts();
    this.getCollections();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.allProducts = data;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    this.pager = this.productService.getPagination(this.allProducts.length, page);
    this.pagedProducts = this.pagedProducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  getCollections() {
    this.productService.getAllCollections().subscribe((data) => {
      this.allCollections = data;
    });
  }

  filter(elm) {
    this.subtitle = 'Coleções';
    this.applyFilter = '';
    if (elm) {
      this.applyFilter = elm;
      this.subtitle = this.applyFilter;
    }
  }

}
