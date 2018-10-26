import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {

  @Input() info: any = {};

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit() {
  }

  openProductDetail(id: string) {
    this.router.navigate(['product-detail', id], { relativeTo: this.route });
  }

}
