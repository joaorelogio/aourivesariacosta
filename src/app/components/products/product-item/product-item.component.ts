import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  info: any = {};
  @Input() set inputInfo(val) {
    this.info = val;
  }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  openProductDetail(id: string) {
    this.router.navigate(['product-detail', id], { relativeTo: this.route });
  }

}
