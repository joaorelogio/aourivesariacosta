import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
// TODO: DELETE COMPONENT IN THE END
import { StyleGuideComponent } from './components/style-guide/style-guide.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'products', component: ProductsComponent, children: [
    {
      path: '',
      component: ProductListComponent
    }, {
      path: 'product-detail/:id',
      component: ProductDetailComponent
    }
  ]},
  { path: 'contacts', component: ContactsComponent },
  { path: 'styles', component: StyleGuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
