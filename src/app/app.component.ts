import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading = false;
  title = 'aourivesariacosta';

  constructor() { }

  ngOnInit() {
    // this.Login();
  }

  Login() {
    this.loading = true;
  }
}
