import { Component } from '@angular/core';
import { Item } from './models/item'; // 7.2.1 import de la classe Item
import { Config } from './config'; // 8.2.1 import class config

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // precise le chemin vers le template
  styleUrls: ['./app.component.css'] // precise le chemin vers le css
})
export class AppComponent { // (export pour rendre la classe "exportable")
 // 1.1.1 déclarer deux variables avec visibilité et typage dans notre classe
  private title: string;
  private version: string;

  // 2.1.1 declarer une variable collection
  // 7.2.4 typage collection en Item[]
  private collection: Item[];
  
   //private newItem: Item; // parti dans itemform.component.ys

  // 1.1.2 créer constructor qui initialise 2 variables : title et version
  constructor(){
    this.title = Config.APP_TITLE; // 8.2.2 use constante dans constructor 
    this.version = Config.APP_VERSION; // 8.2.2 use constante dans constructor 
    // 2.1.2 init collection
    this.collection = Config.COLLECTION_BASE;
  }

  public createObject(item: Item){
    //this.collection.push(item);
    this.collection.unshift(item); // ajoute au debut du tableau et non a la fin comme avec push
    // setTimeout( ()=> { // disparait au bout de 2 sec
    //   item.animateState = 'removed'; // c'est le fait de mettre 'removed' qui fait disparaitre l'element
    // },2000 );
  }

} // end, ne pas supprimer
