import { Component, OnInit } from '@angular/core';
import { Item } from './models/item'; // 7.2.1 import de la classe Item
import { Config } from './config'; // 8.2.1 import class config
import { ItemService } from "app/services/item.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // precise le chemin vers le template
  styleUrls: ['./app.component.css'] // precise le chemin vers le css
})
export class AppComponent implements OnInit{
 
  private title: string;
  private version: string;
  private collection: Item[];
  constructor(private _Config: Config, private _ItemService: ItemService){
    
  }

  ngOnInit(): void {
    this.title = this._Config.APP_TITLE; 
    this.version = this._Config.APP_VERSION; 
   // this.collection = this._ItemService.collection;
  }

} // end, ne pas supprimer
