import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../shared/model/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selection: Hero;

  constructor(private heroService: HeroService, private router: Router) { }

  select(hero: Hero): void {
    this.selection = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.createHero(name).then(hero => {
      this.heroes.push(hero);
      this.selection = hero;
    });
  }

  remove(): void {
    this.heroService.deleteHero(this.selection).then(() => {
      let index = this.heroes.indexOf(this.selection);
      this.heroes.splice(index, 1);
      this.selection = undefined;
    });
  }

  openDetails(): void {
    this.router.navigate(['/heroes', this.selection.id]);
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
