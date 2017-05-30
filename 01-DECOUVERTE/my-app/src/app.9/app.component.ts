import { Component } from '@angular/core';
import { Item } from './models/item';
// 8.2.1 import class Config 
import { Config } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: Item[];
  private newItem: Item;

  constructor() {
    // 8.2.2 use constantes dans constructor
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.resetItem();
    // 8.4.1  user BASE_COLLECTION pour init variable collection dans constructor
    this.collection = Config.BASE_COLLECTION;
  }

  public getDetails(event: Event, param: string) {
    let elem = event.currentTarget || event.target || event.srcElement;
    // console.log(elem);
  }

  public createObject() {
    this.collection.push(this.newItem);
    this.resetItem();
  }

  public resetItem() {
    this.newItem = new Item({reference: '', name: '', state: 0});
  }

}
