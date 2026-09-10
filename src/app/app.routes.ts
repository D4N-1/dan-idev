import { Routes } from '@angular/router';
import { UserComponent } from './user/user';

export const routes: Routes = [


    {
       path: 'try', component: UserComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
