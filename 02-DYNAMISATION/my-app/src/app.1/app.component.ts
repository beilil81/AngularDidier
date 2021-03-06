import { Component } from '@angular/core';
import { Item } from './models/item';
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

  constructor(){
    this.title = Config.APP_TITLE;  
    this.version = Config.APP_VERSION; 
   
    this.collection = Config.COLLECTION_BASE;
  }
 

  public createObject(item: Item){
    this.collection.push(item);
  }

  
}
