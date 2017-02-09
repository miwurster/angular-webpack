import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'demo-modal-sizes',
  templateUrl: './compose-message.component.html',
})
export class ComposeMessageComponent implements AfterViewInit {

  sending = false;

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
  }

  ngAfterViewInit(): void {
    this.popup.show();
  }
}
