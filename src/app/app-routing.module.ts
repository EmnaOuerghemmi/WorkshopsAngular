import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './product/products/products.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { FormProductComponent } from './form-product/form-product.component';
import { DetailsCategoriesComponent } from './details-categories/details-categories.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'add-product',component:FormProductComponent},
  {path:'home',component:HomeComponent},
  {
    path:'categories', component:ListCategoriesComponent,
    children:[ {path:'detail/id', component:DetailsCategoriesComponent}]
  },
 
  {path:'productsByCategory/:id',component:ProductsCategoryComponentComponent},
  {path:'**',component:NotfoundComponent},
{path: 'add-product', component: FormProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
