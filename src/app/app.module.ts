// ANGULAR & BOOTSTRAP & LIBS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgPipesModule } from 'ngx-pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';
import 'hammerjs';
// COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { QuoteComponent } from './components/quote/quote.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { CounterComponent } from './components/counter/counter.component';
// SERVICES
import { ProductService } from './services/product.service';
import { FormValidators } from './services/form-validators.service';
// TODO: DELETE COMPONENT IN THE END
import { StyleGuideComponent } from './components/style-guide/style-guide.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HistoryComponent,
    ProductsComponent,
    ContactsComponent,
    ProductListComponent,
    ProductDetailComponent,
    StyleGuideComponent,
    CarouselComponent,
    QuoteComponent,
    FooterComponent,
    ProductItemComponent,
    CounterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    NgPipesModule,
    ReactiveFormsModule,
    NgxGalleryModule
  ],
  providers: [
    ProductService,
    FormValidators
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
