import { Component, OnInit } from '@angular/core';
import { CrisisService } from './crisis.service';
import { Crisis } from '../shared/model/crisis.model';

@Component({
  templateUrl: './crisis.component.html'
})
export class CrisisComponent implements OnInit {

  public data: Crisis[];
  public initialized = false;

  constructor(private crisisService: CrisisService) { }

  ngOnInit(): void {
    this.crisisService
        .findAll()
        .then((data) => this.data = data)
        .then(() => this.initialized = true);
  }
}
