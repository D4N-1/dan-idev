import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class GamesComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName)
  }

  games = [
    {
      id: 1,
      name: 'Honkai: Star Rail'
    },
    {
      id: 2,
      name: 'Zenless Zone Zero'
    },
    {
      id: 3,
      name: 'League Of Leguends'
    },
    {
      id: 4,
      name: 'RainWorld'
    }
  ]
}
