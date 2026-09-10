import { Component, signal, computed } from '@angular/core';
import { GamesComponent } from '../games/games';
import { Property } from '../property/property';
import { EventsComponent } from '../events/events';
import { SignComponent } from '../sign/sign';

@Component({
  selector: 'app-user',
  imports: [GamesComponent, Property, EventsComponent, SignComponent],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  readonly userLink = signal<string | null>('');
  readonly logged = signal<boolean>(false);
  readonly favGame = signal<string>('');
  readonly isDisable = signal<boolean>(false);

  readonly username = computed(() => {
    const url = this.userLink()?.trim();
    if (!url) return '';
    
    const segments = url.replace(/\/+$/, '').split('/');
    return segments[segments.length - 1] ?? '';
  });

  setUserLink(url: string | null) {
    this.userLink.set(url);
  }

  setFavGame(name: string) {
    this.favGame.set(name);
  }

  toggleDisable() {
    this.isDisable.update((prev) => !prev);
  }
}