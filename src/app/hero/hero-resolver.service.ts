import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Hero } from '../shared/model/hero.model';
import { HeroService } from './hero.service';

@Injectable()
export class HeroResolver implements Resolve<Hero> {

  constructor(private heroService: HeroService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Hero> {
    const id = route.params['id'];
    if (id === 'new') {
      return null;
    }
    console.log('Resolving hero with id', id);
    return this.heroService.getHero(+id)
               .then((hero) => {
                 if (hero) {
                   return hero;
                 } else {
                   console.error('Could not find hero with id', id);
                   this.router.navigate(['/404']);
                   return null;
                 }
               });
  }
}
