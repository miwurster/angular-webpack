import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/model/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'changeit-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selection: Hero;
  initialized = false;

  constructor(private heroService: HeroService) { }

  refresh(): void {
    this.heroes = [];
    this.initialized = false;
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes)
        .then(() => this.initialized = true);
  }

  onSelect(hero: Hero): void {
    this.selection = hero;
  }

  ngOnInit(): void {
    this.refresh();
  }
}
