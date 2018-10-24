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
    this.quoteTxt = 'O saber e a arte são portugueses. As matérias primas também. Na tradição da melhor ourivesaria nacional, criamos preciosidades que vencem o tempo e prolongam a memória. São pequenos tesouros da nossa identidade, joías retiradas da cultura e do imaginário de um povo. Venha conhecê-las. Afinal, Portugal vale ouro.';
    this.quoteAuthor = 'A Ourivesaria Costa';
  }

}
