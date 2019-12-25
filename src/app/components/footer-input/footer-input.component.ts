import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer-input',
  templateUrl: './footer-input.component.html',
  styleUrls: ['./footer-input.component.scss'],
})
export class FooterInputComponent implements OnInit {

  private message = '';

  @Output() enter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  OnEnter() {
    if (this.message.trim()) {
      this.enter.emit(this.message);
      this.message = '';
    }
  }

}
