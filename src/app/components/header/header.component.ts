import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit  {

  constructor() { }

  ngOnInit() {
    this.initHoverLogo();
  }

  initHoverLogo() {
    let idx = 0;
    fade();
    function fade() {
        if (idx >= $('#logotipo img').length) {
          idx = 0;
        }
        $('#logotipo img').eq(idx).fadeIn(1500).delay(3000).fadeOut(1500, fade);
        idx++;
    }
  }
}
