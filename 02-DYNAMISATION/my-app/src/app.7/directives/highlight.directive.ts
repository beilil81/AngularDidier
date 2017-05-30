import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[highlight]',

})

export class HightLightDirective {
    constructor(element: ElementRef, renderer: Renderer){
            renderer.setElementStyle(element.nativeElement, 'background', 'yellow');
    }
}