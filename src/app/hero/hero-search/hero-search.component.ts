import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../../shared/model/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'changeit-hero-search',
  templateUrl: './hero-search.component.html'
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService,
              private router: Router) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  openDetails(hero: Hero) {
    this.router.navigate(['/heroes', hero.id]);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
                      .debounceTime(300) // Wait for 300ms before triggering search
                      .distinctUntilChanged() // Ignore if next search result is same as previous
                      .switchMap(term => term // Switch to return an observable
                        // Return the Observable from service
                        ? this.heroService.findByName(term)
                        // ... or return an empty result
                        : Observable.of<Hero[]>([])
                      )
                      .catch(error => {
                        console.log(error);
                        return Observable.of<Hero[]>([]);
                      });
  }
}
