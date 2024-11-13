import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from '../Models/categorie'; // Ajustez le chemin en fonction de la localisation de votre modèle

@Pipe({
  name: 'filterCategories'
})
export class FilterCategoriesPipe implements PipeTransform {

  transform(categories: Categorie[], titre: string): Categorie[] {
    // Vérifiez si le titre est vide ou null
    if (!categories || !titre) {
      return categories;
    }
    
    // Convertir le titre en minuscules et filtrer les catégories en fonction du titre
    return categories.filter(cat => 
      cat.title.toLowerCase().includes(titre.toLowerCase())
    );
  }
}
