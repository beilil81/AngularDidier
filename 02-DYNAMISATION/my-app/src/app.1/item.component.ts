import { Component, Input } from '@angular/core';
import { Item } from './models/item';


@Component({
  selector: 'item-component',
  templateUrl: './item.component.html', // precise le chemin vers le template
  styleUrls: ['./item.component.css'] // precise le chemin vers le css
})

// 10.2.3 export de la classe ItemComponent
export class ItemComponent {
    
    @Input() item: Item; 
  
  
}