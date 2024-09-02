import { Routes } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomePageComponent,
    },
    {
        path: 'login',
        title: 'App User Login',
        component: LoginPageComponent,
    },
];