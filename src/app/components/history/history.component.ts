import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  title: string;
  subtitle: string;

  constructor() { }

  ngOnInit() {
    this.title = 'a ourivesaria costa';
    this.subtitle = 'info';
  }

}
