import { Injectable } from '@angular/core';
import { Item } from "app/models/item";

@Injectable()
export class ItemService {
  emptyItem: Item;

  constructor() {
    this.resetItem();
  }

  public collection = [
    new Item({ reference: '1234', name: 'Christophe', state: 0 }),
    new Item({ reference: '5678', name: 'Momo', state: 1 }),
    new Item({ reference: '9101', name: 'Siham', state: 2 })
  ]

  add(item: Item) {
    this.collection.unshift(item);
    this.resetItem();

  }

  resetItem() {
    this.emptyItem = new Item({ reference: '', name: '', state: 0 });
  }

  public changeState(item: Item, state: number) {
    item.state = state;
  }

  public deleteItem(item: Item) {
    item.animateState = 'removed';
    setTimeout(() => {
      item.animateState = 'removedFromDom';
    }, 1000);
  }

}
