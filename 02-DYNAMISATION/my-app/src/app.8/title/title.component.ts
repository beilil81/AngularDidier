import { Component } from '@angular/core';
import { Config } from '../config'; // 8.2.1 import class config

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html', 
  styleUrls: ['./title.component.css'] 
})
export class TitleComponent { 
  private title: string;

  constructor(){
    this.title = Config.APP_TITLE; 

  }


} // end, ne pas supprimer
