import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../../shared/model/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  hero: Hero = new Hero;

  constructor(private heroService: HeroService,
              private router: Router, private route: ActivatedRoute) { }

  save(): void {
    this.heroService.updateHero(this.hero);
  }

  close(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }
}
