import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  quoteTxt: string;
  quoteAuthor: string;

  constructor() { }

  ngOnInit() {
    this.quoteTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mi purus. Nunc justo turpis, commodo sit amet orci in, viverra scelerisque erat. Maecenas luctus vehicula purus, et lobortis tellus volutpat in. Phasellus ac ornare augue, eget varius leo. Proin fermentum, lorem ac viverra imperdiet, ipsum dolor condimentum lacus, vel ullamcorper odio tortor non arcu. Integer vitae orci varius, interdum dolor in, dictum lacus.';
    this.quoteAuthor = 'Finibus Bonorum';
  }

}
