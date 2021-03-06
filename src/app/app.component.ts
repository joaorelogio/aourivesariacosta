import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading: Boolean = false;
  title = 'aourivesariacosta';

  underConstruction = true;

  constructor(
    private loadingService: LoadingService
  ) {
    this.loadingService.onLoadingChanged.subscribe(res => {
      this.loading = res;
    });
  }

  ngOnInit() {
  }
}
