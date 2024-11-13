import { Component } from '@angular/core';
import { Categorie } from '../Models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
 categories: Categorie[] = [
    {
      id: 1,
      title: 'Grand électroménager',
      image: 'assets/images/categorie_electromenager.jpg',
      description: 'Découvrez une large gamme de réfrigérateurs, machines à laver, et autres grands appareils électroménagers.',
      available: true
    },
    {
      id: 2,
      title: 'Petit électroménager',
      image: 'assets/images/categorie_petit_electromenager.jpg',
      description: 'Trouvez des appareils pratiques pour la cuisine et la maison, comme des mixeurs, bouilloires, et plus.',
      available: true
    },
    {
      id: 3,
      title: 'Produits informatiques',
      image: 'assets/images/categorie_produits_informatiques.jpg',
      description: 'Ordinateurs, accessoires, et composants pour améliorer votre expérience informatique.',
      available: true
    },
    {
      id: 4,
      title: 'Smart Phones',
      image: 'assets/images/categorie_smartPhone.jpg',
      description: 'Une collection de smartphones dernier cri, adaptés à tous vos besoins en mobilité.',
      available: true
    },
    {
      id: 5,
      title: 'TV, images et son',
      image: 'assets/images/categorie_tv_image_son.jpg',
      description: 'Téléviseurs haute définition, systèmes audio et autres équipements pour vos loisirs.',
      available: true
    },
    {
      id: 6,
      title: 'Produits voiture',
      image: 'assets/images/produits_nettoyages.jpg',
      description: 'Produits de nettoyage et accessoires pour entretenir et embellir votre voiture.',
      available: false
    }
 ];
 titre: string = '';  // Propriété liée à l'input de recherche


 showDesc(x: string) {
   alert(x);
 }
}
