import { Component, OnInit } from '@angular/core'; 
import { Item } from './models/item'; 
import { ItemService } from "app/services/item.service";


@Component({
  selector: 'itemform-component',
  templateUrl: './itemform.component.html', 
  styleUrls: ['./itemform.component.css'] 
})

export class ItemFormComponent implements OnInit {
  private newItem: Item;

  constructor(private _ItemService: ItemService) {
    
  }

  ngOnInit(){
      this.newItem = this._ItemService.emptyItem;
  }

  public resetItem() {
    this.newItem = new Item({ reference: '', name: '', state: 0 }); 
  }
   createObject() {
    this._ItemService.add(this.newItem);
    this.newItem = this._ItemService.emptyItem;
  }

}