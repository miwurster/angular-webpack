import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dynamic-components]'
})
export class DynamicComponentsDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}
