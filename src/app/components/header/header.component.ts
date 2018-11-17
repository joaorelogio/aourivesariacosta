// import { Component, OnInit } from '@angular/core';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy  {

  showloader: Boolean = false;
  subscription: Subscription;
  timer: Observable<any>;
  imgSrc: string;

  constructor() { }

  ngOnInit() {
    this.setTimer();
  }

  ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

  public setTimer() {
    this.imgSrc = 'assets/logo/logo-fill-text.png';
    const numbers = timer(5000, 5000);
    numbers.subscribe(x => {
      console.log(x);
      if ( x === 5 ) {
        this.imgSrc = 'assets/logo/logo-fill-text.png';
        this.setTimer();
      }
    });
  }
}
