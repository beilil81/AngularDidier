import { Component, Input } from '@angular/core'; // 11.1.1 Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Item } from './models/item'; // 7.2.1 import de la classe Item

// 10.2.2 @Component pour déclarer notre composant avec un sélector, un template html et un styleUrl
@Component({
  selector: 'item-component',
  templateUrl: './item.component.html', 
  styleUrls: ['./item.component.css'], 
  // 3.2.1 créer deux transitionsde void (n'existe pas dans le dom) vers n'importe quel etat et
 // de n'import quel etat vers void
  animations: [
    trigger('itemAnimateState',[
      state('inactive', style({color: 'red'})),
      state('active', style({color: 'blue'})),
      transition('void => *',[ 
        style({transform: 'translateX(-100%)'}), 
        animate(1000) // la vitesse 
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ]) 
    ])
  ]
})

     

// 10.2.3 export de la classe ItemComponent
export class ItemComponent {
    // 10.2.4 creer @Input () item qu'on va pouvoir utiliser comme référence dans le template app.component.html
    @Input() item: Item; // on crée une entité réutilisable dans d'autres composants
    
    // fonction pour changement d'état
    public changeState(event: Event, state: number){
      this.item.state = state;
      // if(this.item.state == 2){
      //   this.item.animateState == 'removed';
      //}
    }
}