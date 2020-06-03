import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent implements OnInit {

  @Input() text: string;
  @Input() author: string;

  constructor() { }

  ngOnInit() {
  }

}
