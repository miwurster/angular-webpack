import { Injectable, ModuleWithProviders } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero.model';

const HEROES: Hero[] = require('../../assets/data.json');

@Injectable()
export class HeroService {

  private nextId = 21;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get('app/heroes')
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    let data = JSON.stringify({id: this.nextId++, name: name});
    return this.http.post('app/heroes', data, {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    return this.http.put(`app/heroes/${hero.id}`, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(hero: Hero): Promise<Hero> {
    return this.http.delete(`app/heroes/${hero.id}`, {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise<Hero[]>(resolve => setTimeout(resolve, 500)).then(() => this.getHeroes());
  // }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}

export class HeroDataService implements InMemoryDbService {
  createDb() {
    let heroes: Hero[] = HEROES;
    // This results in an '/app/heroes' endpoint
    return {heroes};
  }
}
