import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  info: any = {};
  from: string;
  @Input() set inputInfo(val) {
    this.info = val;
  }
  @Input() set path(val) {
    this.from = val;
  }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  openProductDetail(id: string) {
    this.router.navigate(['/products/product-detail', id], { queryParams: { path: this.from } });
  }

}
