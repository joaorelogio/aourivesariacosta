import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  // today: string;

  quoteTxt: string;
  quoteAuthor: string;

  newestTitle: string;
  newestProds: any;

  randomHighlProds: any;
  highTitle: string;
  path: string;

  constructor(
    public productService: ProductService
  ) {
    this.quoteTxt = 'O saber e a arte são portugueses. As matérias primas também. Na tradição da melhor ourivesaria nacional, criamos preciosidades que vencem o tempo e prolongam a memória. São pequenos tesouros da nossa identidade, joías retiradas da cultura e do imaginário de um povo. Venha conhecê-las. Afinal, Portugal vale ouro.';
    this.quoteAuthor = 'A Ourivesaria Costa - O valor de ser português.';
  }

  ngOnInit() {
    // this.today = this.getDate();

    this.path = 'home';
    this.newestTitle = 'Novos Produtos';
    this.highTitle = 'Produtos em destaque';
    this.productService.getProductByHighlighted().subscribe((data) => {
      this.getRandomHighlighted(data);
    });
    this.productService.getAllProducts().subscribe((data) => {
      // console.log(data);
      this.orderByDate(data);
    });
  }

  // getDate() {
  //   const date = new Date(),
  //         year = date.getFullYear(),
  //         month = (date.getMonth() + 1).toString(),
  //         formatedMonth = (month.length === 1) ? ('0' + month) : month,
  //         day = date.getDate().toString(),
  //         formatedDay = (day.length === 1) ? ('0' + day) : day,
  //         hour = date.getHours().toString(),
  //         formatedHour = (hour.length === 1) ? ('0' + hour) : hour,
  //         minute = date.getMinutes().toString(),
  //         formatedMinute = (minute.length === 1) ? ('0' + minute) : minute,
  //         second = date.getSeconds().toString(),
  //         formatedSecond = (second.length === 1) ? ('0' + second) : second;
  //   return formatedDay + '-' + formatedMonth + '-' + year + ' ' + formatedHour + ':' + formatedMinute + ':' + formatedSecond;
  // }

  getRandomHighlighted(allProds) {
    this.randomHighlProds = [];
    for (let i = 0; i < 4; i++) {
      const idx = Math.floor(Math.random() * allProds.length);
      this.randomHighlProds.push(allProds[idx]);
      allProds.splice(idx, 1);
    }
    return this.randomHighlProds;
  }

  orderByDate(allProds) {
    const sorrtedArray: string[] = allProds.sort((n1, n2) => {
      if (n1.create_date > n2.create_date) {
        return 1;
      }
      if (n1.create_date < n2.create_date) {
        return -1;
      }
      return 0;
    });
    this.newestProds = sorrtedArray.slice(Math.max(sorrtedArray.length - 3, 1));
    return this.newestProds;
  }


}
