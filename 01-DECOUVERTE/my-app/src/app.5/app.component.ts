import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: any;

  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    this.collection = [
      {reference: '1234', name: 'Christophe', state: 0},
      {reference: '5124', name: 'Momo', state: 1},
      {reference: '5896', name: 'Siham', state: 2}
    ]
  }

  // 5.2.1 creer fonction getDetails()
  public getDetails(event: Event, param: string) {
    // 5.2.2 recupérer et affiché dans un console.log $event 
    console.log(event);
    // 5.2.3 variable elem pour récupérer l'element html à l'origine du click
    let elem = event.currentTarget || event.target || event.srcElement;
    // 5.2.4 afficher element récupéré 
    console.log(elem);
    // 5.2.5 afficher valeur att id
    console.log(elem['id']);
    // 5.2.6 afficher 2e argument personnalisé 
    console.log(param);
  }

}
