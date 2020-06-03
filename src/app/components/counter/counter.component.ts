import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  amount: number;
  start = 1;
  limit: number;
  count: number;

  @Input() set price(val) {
    this.amount = val;
  }

  @Input() set stock(val) {
    this.limit = val;
  }

  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.count = this.start;
    this.change.emit(this.count);
  }

  increment() {
    if ( this.count === this.limit) {
      return false;
    } else {
      this.count++;
      this.change.emit(this.count);
    }
  }

  decrement() {
    if ( this.count === this.start) {
      return false;
    } else {
      this.count--;
      this.change.emit(this.count);
    }
  }

}
