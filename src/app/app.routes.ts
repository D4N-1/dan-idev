import { Routes } from '@angular/router';
import { UserComponent } from './ng/user/user';

export const routes: Routes = [


    {
       path: 'try', component: UserComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
