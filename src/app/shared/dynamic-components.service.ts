import { Injectable, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
import { DynamicComponentsDirective } from './dynamic-components.directive';

@Injectable()
export class DynamicComponentsService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Creates the ComposeMessageComponent dynamically
   * See cookbook: https://angular.io/docs/ts/latest/cookbook/dynamic-component-loader.html
   */
  createComponent<T>(component: Type<T>, viewChild: DynamicComponentsDirective,
                     callback: ((instance: T) => void)): void {
    // Clear all, meaning we can only have one dynamic component at one point in time
    viewChild.viewContainerRef.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    let componentRef = viewChild.viewContainerRef.createComponent(componentFactory);
    callback(<T>componentRef.instance);
  }
}
