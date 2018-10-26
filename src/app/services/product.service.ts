import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  jsonSrc = 'assets/products.json';

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
        const result = data.map(val => val.collection);
        const allCollections = result.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
        });
        observer.next(allCollections);
      });
    });
  }

  getProductFiltered(elm: string) {
    return new Observable(observer => {
      this.http.get(this.jsonSrc).subscribe((data: any[]) => {
        const result = data.map(val => val.collection === elm);
        observer.next(result);
      });
    });
  }

}
