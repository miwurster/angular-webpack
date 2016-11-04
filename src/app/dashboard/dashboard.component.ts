import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import * as _ from 'lodash';

import { Hero } from '../hero/hero.model';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'dashbaord',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  gotoDetail(hero: Hero): void {
    let link = ['/heroes', hero.id];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = _.shuffle(heroes).slice(1, 5));
  }
}
