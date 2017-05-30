import { Component, Input } from '@angular/core';
  // 2.1.1 import trigger, state, styles, transition, animate
import {trigger, state, style, transition, animate } from '@angular/animations';
import { Item } from './models/item';


@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger('itemAnimateState', [
       state('inactive', style({color: 'red'})),
       state('active', style({color: 'blue'})),
       transition('inactive <=> active', animate('100ms ease-in'))
    ])
  ]
})

export class ItemComponent {
    
    @Input() item: Item; 
    //  2.1.2 créer fonction changeState()
   public changeState(event: Event, state: number){
     this.item.state= state;

   }
  
}