import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [

    {
        path:'',
        component: NxWelcomeComponent,
        pathMatch: 'full',
    },
    {
        path:'header',
        loadComponent : () => import('@shiv-monorepo/header').then((m) => m.HeaderComponent),
    },
    {
        path:'footer',
        loadComponent: () => import('@shiv-monorepo/footer').then((m)=> m.FooterComponent),
    }
];
