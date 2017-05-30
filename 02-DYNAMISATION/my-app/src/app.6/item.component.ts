import { Component, Input } from '@angular/core'; // 11.1.1 Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Item } from './models/item'; // 7.2.1 import de la classe Item

// 10.2.2 @Component pour déclarer notre composant avec un sélector, un template html et un styleUrl
@Component({
  selector: 'item-component',
  templateUrl: './item.component.html', // precise le chemin vers le template
  styleUrls: ['./item.component.css'], // precise le chemin vers le css
})



// 10.2.3 export de la classe ItemComponent
export class ItemComponent {
  // 10.2.4 creer @Input () item qu'on va pouvoir utiliser comme référence dans le template app.component.html
  @Input() item: Item; // on crée une entité réutilisable dans d'autres composants

  // fonction pour changement d'état
  public changeState(event: Event, state: number) {
    this.item.state = state;

    // pour faire disparaitre les commandes en etat "livrée"
    // if(this.item.state === 2){ // c'est le state 2 qui fait sortir l'element du DOM
    //   this.item.animateState = 'removed';
    // }

  }

  // supprimer une commande
  public deleteItem() {
    this.item.animateState = 'removed';
    setTimeout(() => { // disparait au bout de 2 sec
      this.item.animateState = 'removedFromDom'; // c'est le fait de mettre 'removed' qui fait disparaitre l'element
    }, 1000);
  }
}