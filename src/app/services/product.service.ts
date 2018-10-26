import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  jsonSrc = 'assets/products.json';
  allCollections: any[];

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get(this.jsonSrc);
  }

  getProductDetail(id: string) {
    return new Observable(observer => {
      this.http.get(this.jsonSrc).subscribe((data: any[]) => {
        const result = data.find(val => val.id === id);
        observer.next(result);
      });
    });
  }

  getAllCollections() {
    return new Observable(observer => {
      this.http.get(this.jsonSrc).subscribe((data: any[]) => {
        // const valueArr = data.map(val => val.collection);
        // const isDuplicate = valueArr.filter(function(item) {
        //   return valueArr.indexOf(item) !== item;
        // });
        // observer.next(isDuplicate);
        const result = data.map(val => val.collection);
        observer.next(result);
      });
    });
  }
}
