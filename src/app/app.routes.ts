import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth/login',
        loadComponent: () => import('./components/login/login').then((c) => c.Login),
        title: 'Login | Welcome back',
    },
    {
        path: 'auth/signup',
        loadComponent: () => import('./components/signup/signup').then((c) => c.Signup),
        title: 'Create your account',
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found').then((c) => c.NotFound),
        title: 'Oops! You are lost'
    }
];
