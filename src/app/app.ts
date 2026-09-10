import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user';
import { GamesComponent } from './games/games';
import { EventsComponent } from "./events/events";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, EventsComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('danidev');
}
