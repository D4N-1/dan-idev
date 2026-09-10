import { Component } from '@angular/core';
import { GamesComponent } from '../games/games';

@Component({
  selector: 'app-user',
  imports: [ GamesComponent ],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {

  username = 'Dani'
  logged = false

  favGame = '';

  getFavGame(name: string) {
    this.favGame = name;
  }
}
