import { FormControl } from '@angular/forms';

export class HeroDetailValidators {

  static noLeadingAndTrailingSpaces(control: FormControl) {
    if (control.value) {
      return control.value === control.value.trim() ? null : {
          noLeadingAndTrailingSpaces: {
            valid: false
          }
        };
    }
    return null;
  }
}
