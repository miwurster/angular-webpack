import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[changeitDynamicComponent]'
})
export class DynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
