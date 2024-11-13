import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';

@Component({
  selector: 'app-products-category-component',
  templateUrl: './products-category-component.component.html',
  styleUrls: ['./products-category-component.component.css']
})
export class ProductsCategoryComponentComponent {

id!:number;
listProducts : Product[]=[
  {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/grand_electromenagers/refrigerateur.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
  {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur-samsung-no-frost-384l-rt50k5152ww-blanc.jpg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
  {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/Lave vaisselle Beko.jpg", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
  {"id":4, "name":"Oppo Smart Phone","image":"assets/images/Oppo Smart Phone.webp","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
  {"id":5, "name":"Hachoir", "image":"assets/images/Hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
  {"id":6, "name":"TV 50'' LG","image":"assets/images/TV 50'' LG.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
]
productsByCategory !:Product[];
constructor(private R:ActivatedRoute){

}
ngOnInit(){
  this.id = Number(this.R.snapshot.params['id']);

  // Affecter le résultat du filtrage à productsByCategory
  this.productsByCategory = this.listProducts.filter(p => p.categoryId == this.id);

  // Vérifier si des produits sont trouvés avant d'accéder à leur longueur
  if (this.productsByCategory.length > 0) {
    console.log(this.productsByCategory.length);
  } else {
    console.log("Aucun produit trouvé pour cette catégorie.");
  }

}
}
