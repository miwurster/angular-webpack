import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hero } from '../../shared/model/hero.model';
import { HeroService } from '../hero.service';

enum EditorMode {
  CreateHero,
  EditHero
}

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  mode: EditorMode;

  constructor(private heroService: HeroService,
              private router: Router, private route: ActivatedRoute) { }

  save(): void {
    if (this.mode === EditorMode.CreateHero) {
      let name = this.hero.name.trim();
      if (!name) return;
      this.heroService.createHero(name)
          .then(() => console.debug('Created a new hero'))
          .then(() => this.close());
    }
    else {
      this.heroService.updateHero(this.hero)
          .then(() => console.debug('Updated an existing hero'))
          .then(() => this.close());
    }
  }

  close(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.route.data
        .subscribe((data: { hero: Hero }) => {
          if (data.hero) {
            this.mode = EditorMode.EditHero;
            this.hero = data.hero;
          }
          else {
            this.mode = EditorMode.CreateHero;
            this.hero = new Hero;
          }
        });
  }

  // Expose enum to template
  EditorMode = EditorMode;
}

// remove(): void {
//   this.heroService.deleteHero(this.selection).then(() => {
//     let index = this.heroes.indexOf(this.selection);
//     this.heroes.splice(index, 1);
//     this.selection = undefined;
//   });
// }
