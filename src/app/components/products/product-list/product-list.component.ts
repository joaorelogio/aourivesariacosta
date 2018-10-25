import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openProductDetail(id: string) {
    this.router.navigate(['product-detail', id], { relativeTo: this.route });
  }

}
