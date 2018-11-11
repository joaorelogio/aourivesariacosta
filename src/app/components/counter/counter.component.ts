import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  amount: number;
  count: number;
  @Input() set prodVal(val) {
    this.amount = val;
  }
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.count = 1;
    this.change.emit(this.count);
  }

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    if ( this.count === 1) {
      return false;
    } else {
      this.count--;
      this.change.emit(this.count);
    }
  }

}
