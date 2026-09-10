import { Component } from '@angular/core';
import { GamesComponent } from '../games/games';
import { Property } from '../property/property';

@Component({
  selector: 'app-user',
  imports: [ GamesComponent, Property ],
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

  isDisable = false;

  getDisableButton(value: boolean) {
    this.isDisable = value
  }
}
