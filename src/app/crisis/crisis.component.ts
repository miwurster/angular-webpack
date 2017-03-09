import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { CrisisService } from './crisis.service';
import { Crisis } from '../shared/model/crisis.model';
import { ComposeMessageComponent } from '../shared/compose-message.component';
import { DynamicComponentsDirective } from '../shared/dynamic-components.directive';

@Component({
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.scss'],
})
export class CrisisComponent implements OnInit {

  public data: Crisis[];
  public initialized = false;

  @ViewChild(DynamicComponentsDirective)
  dynamicComponents: DynamicComponentsDirective;

  constructor(private crisisService: CrisisService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Creates the ComposeMessageComponent dynamically
   * See cookbook: https://angular.io/docs/ts/latest/cookbook/dynamic-component-loader.html
   */
  contact(): void {
    // Create a component factory
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComposeMessageComponent);
    // Get viewContainerRef of dynamicComponents wrapper
    let viewContainerRef = this.dynamicComponents.viewContainerRef;
    // Clear prevous components
    viewContainerRef.clear();
    // Create a component instance
    let componentRef = viewContainerRef.createComponent(componentFactory);
    // Inject data into the created component instance
    (<ComposeMessageComponent>componentRef.instance).message = 'Add your text here...';
  }

  ngOnInit(): void {
    this.crisisService
        .findAll()
        .then((data) => this.data = data)
        .then(() => this.initialized = true);
  }
}
