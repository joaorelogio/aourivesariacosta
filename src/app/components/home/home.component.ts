import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  quoteTxt: string;
  quoteAuthor: string;
  randomProds: any;
  highTitle: string;
  path: string;

  constructor(
    public productService: ProductService
  ) {
    this.quoteTxt = 'O saber e a arte são portugueses. As matérias primas também. Na tradição da melhor ourivesaria nacional, criamos preciosidades que vencem o tempo e prolongam a memória. São pequenos tesouros da nossa identidade, joías retiradas da cultura e do imaginário de um povo. Venha conhecê-las. Afinal, Portugal vale ouro.';
    this.quoteAuthor = 'A Ourivesaria Costa - O valor de ser português.';
  }

  ngOnInit() {
    this.path = 'home';
    this.highTitle = 'Novos Produtos';
    this.productService.getProductByHighlighted().subscribe((data) => {
      this.getRandomHighlighted(data);
    });
  }

  getRandomHighlighted(allProds) {
    this.randomProds = [];
    for (let i = 0; i < 3; i++) {
      const idx = Math.floor(Math.random() * allProds.length);
      this.randomProds.push(allProds[idx]);
      allProds.splice(idx, 1);
    }
    return this.randomProds;
  }

}
