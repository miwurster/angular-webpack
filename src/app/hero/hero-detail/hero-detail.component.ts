import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hero } from '../../shared/model/hero.model';
import { HeroService } from '../hero.service';
import { HeroDetailValidators } from './hero-detail.validators';

enum EditorMode {
  CreateHero,
  EditHero
}

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [
    '.form-group { margin-bottom: 0 }',
    '.help-block:last-child { margin-bottom: 0 }',
  ],
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  mode: EditorMode;

  heroForm: FormGroup;

  constructor(private heroService: HeroService,
              private router: Router, private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  save(): void {
    if (this.mode === EditorMode.CreateHero) {
      let name = this.hero.name;
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

  onSubmit() {
    this.hero.name = this.heroForm.value['name'];
    this.save();
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
    this.buildForm();
  }

  private buildForm(): void {
    this.heroForm = this.formBuilder.group({
      'name': [
        this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24),
          Validators.pattern(/^(?!bob).*/i),
          HeroDetailValidators.noLeadingAndTrailingSpaces,
        ],
      ],
    });
    this.heroForm.valueChanges.subscribe(data => this.onValueChanged());
    this.onValueChanged(); // (re)set validation messages
  }

  private onValueChanged(/* data?: any */) {
    if (!this.heroForm) return;
    const form = this.heroForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = null; // clear previous error message (if any)
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = [];
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
  }

  formErrors: { name: Array<string> } = {
    'name': null,
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'pattern': 'Someone named "Bob" cannot be a hero.',
      'noLeadingAndTrailingSpaces': 'Name cannot contain leading or trailing spaces.',
    },
  };

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
