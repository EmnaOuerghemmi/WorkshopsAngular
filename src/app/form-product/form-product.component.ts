import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Models/product';  // Assurez-vous que Product est bien défini dans ce fichier

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  // Définition du formulaire réactif
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z]*$') // Seulement des lettres
    ]),
    image: new FormControl(''),
    categoryId: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$') // Un nombre entier pour Category ID
    ]),
    description: new FormControl(''),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$') // Un prix avec 0, 1 ou 2 décimales
    ]),
    brand: new FormControl(''),
    promotion: new FormControl(0, [
      Validators.pattern('^(0|[1-9][0-9]?)$') // Un nombre entre 0 et 100 pour la promotion
    ])
  });

  // Liste des produits ajoutés
  products: Product[] = [];

  // Soumission du formulaire
  onSubmit() {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: this.products.length + 1, // ID auto-incrémenté
       name: this.productForm.get('name')?.value,
        image : this.productForm.get('image')?.value,
        categoryId: this.productForm.get('categoryId')?.value,
        description: this.productForm.get('description')?.value,
        price: this.productForm.get('price')?.value,
        brand: this.productForm.get('brand')?.value,
        promotion: this.productForm.get('promotion')?.value
      };

      // Ajout du produit à la liste
      this.products.push(newProduct);

      // Réinitialisation du formulaire
      this.productForm.reset();
    }
  }
}
