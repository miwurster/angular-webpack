import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { CrisisService } from './crisis.service';
import { Crisis } from '../shared/model/crisis.model';
import { ComposeMessageComponent } from '../shared/compose-message.component';
import { DynamicComponentsDirective } from '../shared/dynamic-components.directive';
import { DynamicComponentsService } from '../shared/dynamic-components.service';

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
              private dynamicComponentsService: DynamicComponentsService) { }

  contact(): void {
    this.dynamicComponentsService.createComponent(ComposeMessageComponent, this.dynamicComponents,
      instance => {
        instance.message = 'Add your text here...';
      });
  }

  ngOnInit(): void {
    this.crisisService
        .findAll()
        .then((data) => this.data = data)
        .then(() => this.initialized = true);
  }
}
