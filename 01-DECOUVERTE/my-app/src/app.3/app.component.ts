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
      // 3.1.1 ajout propriété state aux objets de la collection
      {reference: '1234', name: 'Christophe', state: 0},
      {reference: '5124', name: 'Momo', state: 1},
      {reference: '5896', name: 'Siham', state: 2}
    ]
  }

}
