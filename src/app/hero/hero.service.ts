import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero } from '../shared/model/hero.model';

@Injectable()
export class HeroService {

  static BASE_PATH = 'api/heroes';

  private nextId = 10;
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  private static handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(HeroService.BASE_PATH)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(HeroService.handleError);
  }

  createHero(name: string): Promise<Hero> {
    const data = JSON.stringify({ id: this.nextId++, name: name });
    return this.http.post(HeroService.BASE_PATH, data, { headers: this.headers })
               .toPromise()
               .then(response => response.json().data as Hero)
               .catch(HeroService.handleError);
  }

  updateHero(hero: Hero): Promise<Hero> {
    return this.http.put(`${HeroService.BASE_PATH}/${hero.id}`, JSON.stringify(hero), { headers: this.headers })
               .toPromise()
               .then(() => hero)
               .catch(HeroService.handleError);
  }

  // deleteHero(hero: Hero): Promise<Hero> {
  //   return this.http.delete(`${this.basePath}/${hero.id}`, { headers: this.headers })
  //              .toPromise()
  //              .then(() => hero)
  //              .catch(HeroService.handleError);
  // }

  findByName(name: string): Observable<Hero[]> {
    return this.http.get(`${HeroService.BASE_PATH}/?name=${name}`)
               .map((response: Response) => response.json().data as Hero[]);
  }
}
