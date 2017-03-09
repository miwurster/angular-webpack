import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  templateUrl: './compose-message.component.html',
})
export class ComposeMessageComponent implements AfterViewInit {

  sending = false;

  message = '';

  @ViewChild('popup')
  public popup: ModalDirective;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.close();
    }, 1500);
  }

  cancel() {
    this.close();
  }

  private close() {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.popup.hide();
  }

  ngAfterViewInit(): void {
    this.popup.show();
  }
}
