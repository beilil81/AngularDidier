import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'appState'
})
export class StateDirective {

  constructor(public element: ElementRef, public renderer: Renderer) { }
  ngOnChanges() {
    let cssClass = 'state-' + this.itemState;
    let text = 'A livrer';
    let elementNode = this.element.nativeElement; //recuper l'element sur lequel on veut ajouter une class

    switch (parseInt(this.itemState)) {
      case 1:
        text = 'En cours de livraison';
        break;
      case 2:
        text = 'Livré';
        break;
    }

    this.renderer.setElementClass(elementNode, cssClass, true);
    elementNode.innerHTML = text;
  }

  @Input('state') itemState: any;

}
