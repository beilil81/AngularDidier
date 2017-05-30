//  12.2.1 imports de Component, Output, EventEmitter, Item 
import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from './models/item';
// 12.2.2 declaration @Component 
@Component({
  selector: 'itemform-component',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.css']
})
export class ItemformComponent {
//   12.2.7 coupé collé la private newItem depuis app.component.ts
  private newItem: Item;  
//   12.2.3 declaration @Output() 
  @Output() onCreateObject: EventEmitter<any> = new EventEmitter();

//   12.2.8 constructor avec resetItem()
  constructor() {
    this.resetItem();
  }

    // 12.2.4 creer createObject()
  public createObject() {
    //   12.2.5 utilisation methode emit sur l'eventemiter pour passer newItem au composant parent 
    this.onCreateObject.emit(this.newItem);
    this.resetItem();
  }

//   12.2.6 coupé coller la methode resetItem() depuis app.component.ts
  public resetItem() {
    this.newItem = new Item({reference: '', name: '', state: 0});
  }
}
