// 11.1.1 import Output et EventEmitter 
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item;
  // 11.1.2 declarer Output qui prend un new EventEmitter 
  @Output() onGetDetails: EventEmitter<any> = new EventEmitter();

  // 11.1.3 creer la fonction getDetails
  public getDetails(event: Event) {
    event.preventDefault();
    // 11.1.4 use methode emit sur l'eventemitter pour emmetre un item 
    this.onGetDetails.emit(this.item);
  }
}
