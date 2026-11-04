import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class EventsComponent {

  @Input() username = '';
  @Input() imageUrl = '';

  greet() {
    alert(`Hola ${this.username}`)
  }
}
