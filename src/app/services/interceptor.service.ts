import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import { LoadingService } from './loading.service';
// import { do } from 'rxjs/operators';
// https://alligator.io/angular/httpclient-interceptors/

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.onStarted(req);
    return next.handle(req).do(
      evt => {
      if (evt instanceof HttpResponse) {
        console.log('---> status:', evt.status);
        console.log('---> filter:', req.params.get('filter'));
      }
    },
    (err: any) => {
      console.log(err);
    })
    .finally(() => {
        this.loadingService.onFinished(req);
    });
  }
}
