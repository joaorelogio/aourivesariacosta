import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      this.productService.getProductDetail(data.id).subscribe(
        (res: any) => {
          this.product = res;
        },
        (err: any) => {
          console.error(err);
        }
      );
    }, (err) => {
      console.error(err);
      this.backToList();
    });
  }

  backToList() {
    this.router.navigate(['products']);
  }
}
