import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.html',
  styleUrl: './property.scss',
})
export class Property {

  @Output() addDisableEvent = new EventEmitter<boolean>();

  emitDisableEvent(value: boolean) {
    this.addDisableEvent.emit(value)
  }
}
