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

  getProductByCollection(collection: string) {
    return new Observable(observer => {
      this.http.get(this.jsonSrc).subscribe((data: any[]) => {
        const result = data.filter(val => val.collection === collection);
        observer.next(result);
      });
    });
  }

  getProductByHighlighted() {
    return new Observable(observer => {
      this.http.get(this.jsonSrc).subscribe((data: any[]) => {
        const result = data.filter(val => val.highlighted);
        observer.next(result);
      });
    });
  }

  getAllCollections() {
    return new Observable(observer => {
      this.http.get(this.jsonSrc).subscribe((data: any[]) => {
        const result = data.map(val => val.collection);
        const allCollections = result.filter(function (elem, index, self) {
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

  getPagination(totalItems: number, currentPage: number = 1, pageSize: number = 12) {

    const totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}
