import { Component, Input } from '@angular/core';

@Component({
  selector: 'changeit-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  @Input()
  public show = false;
}
