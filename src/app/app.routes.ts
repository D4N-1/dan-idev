import { Routes } from '@angular/router';
import { GamesComponent } from './games/games';

export const routes: Routes = [


    {
       path: 'try', component: GamesComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
