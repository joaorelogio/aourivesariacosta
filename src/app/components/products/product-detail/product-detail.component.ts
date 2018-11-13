import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize, NgxGalleryOrder } from 'ngx-gallery';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  product: any;
  productParts: any;
  productSizes: any;

  count: number;
  amount: number;
  total: string;

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    public productService: ProductService
  ) {
    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Fade,
        imageSize: NgxGalleryImageSize.Cover,
        imageBullets: true,
        imageSwipe: true,
        imageArrows: false,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        thumbnailsOrder: NgxGalleryOrder.Row,
        thumbnailsArrowsAutoHide: true,
        preview: false
      },
      {
        breakpoint: 1199,
        height: '400px'
      },
      {
        breakpoint: 992,
        height: '400px',
        thumbnailsColumns: 3,
      },
      {
        breakpoint: 767,
        height: '200px',
        imageArrows: true,
        imageArrowsAutoHide: true,
        thumbnails: false
      }
    ];
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.productService.getProductDetail(data.id).subscribe(
        (res: any) => {
          this.product = res;
          this.galleryImages = res.detail.picture;
          this.productParts = res.detail.particulars;
          this.productSizes = res.detail.sizes;
          this.amount = res.detail.amount;
          this.total = String(this.amount);
        },
        (err: any) => {
          console.error(err);
        }
      );
    }, (err) => {
      console.error(err);
      this.goBackTo();
    });
  }

  countChange(event) {
    this.count = event;
    const calc = String(this.count * this.amount);
    this.total = parseFloat(calc).toFixed(2);
  }

  goBackTo() {
    this.route.queryParams.subscribe(params => {
      const val = params['path'];
      if (val === 'home') {
        this.router.navigate(['home']);
      } else if (val === 'products') {
        this.router.navigate(['products']);
      }
    });
  }
}
