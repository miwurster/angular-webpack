import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../../shared/model/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  save(): void {
    this.heroService.updateHero(this.hero).then(() => HeroDetailComponent.goBack());
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  static goBack(): void {
    window.history.back();
  }
}
