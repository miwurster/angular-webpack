import { Injectable, ComponentFactoryResolver, Type } from '@angular/core';
import { DynamicComponentDirective } from './dynamic-component.directive';

@Injectable()
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Creates the ComposeMessageComponent dynamically
   * See cookbook: https://angular.io/docs/ts/latest/cookbook/dynamic-component-loader.html
   */
  createComponent<T>(component: Type<T>, viewChild: DynamicComponentDirective,
                     callback: ((instance: T) => void)): void {
    // Clear all, meaning we can only have one dynamic component at one point in time
    viewChild.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewChild.viewContainerRef.createComponent(componentFactory);
    callback(<T>componentRef.instance);
  }
}
