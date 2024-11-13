import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { HighlighterDirective } from './highlighter.directive';
import { FormGroup, FormsModule } from '@angular/forms';
import { FilterCategoriesPipe } from './pipes/filter-categories.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { SearchPipe } from './search.pipe';
import { FormProductComponent } from './form-product/form-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    HighlighterDirective,
    FilterCategoriesPipe,
    FilterArrayPipe,
    NotfoundComponent,
    ProductsCategoryComponentComponent,
    SearchPipe,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
