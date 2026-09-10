import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { UserComponent } from './user/user';
import { GamesComponent } from './games/games';

export const routes: Routes = [

    {
        path: '', component: AppComponent
    },
    {
       path: 'try', component: GamesComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
