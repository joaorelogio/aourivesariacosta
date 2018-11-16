import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.onStarted(req);

    return next.handle(req).pipe(
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            console.log('---> status:', event.status);
          }
        },
        error => status = 'failed'
      ),
      finalize(() => {
        this.loadingService.onFinished(req);
      })
    );
  }
}
