import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  title: string;
  subtitle: string;
  subtitle2: string;

  quoteTxt: string;
  quoteAuthor: string;

  constructor() { }

  ngOnInit() {
    this.title = 'a ourivesaria costa';
    this.subtitle = 'info';
    this.subtitle2 = 'info 2';

    this.quoteTxt = 'Porque gosto de me sentar à mesa e saber que estou à apoiar a produção nacional. Gosto de ver a minha terra a ser trabalhada por mãos portuguesas e proteger aquilo que é nosso. Por isso gosto de consumir o que sei que foi plantado, produzido, trabalhado, colhido pelos meus compatriotas, porque reconheco a qualidade do produto nacional e sei que ao apoiar o que é meu e teu estou a contribuir para mais e melhores momentos para Portugal.';
    this.quoteAuthor = 'A Ourivesaria Costa - Uma paixão de gerações.';
  }

}
