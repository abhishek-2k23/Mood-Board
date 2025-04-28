import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { LandingpageComponent } from './layout/landingpage/landingpage.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => HomeComponent,
        canActivate: [authGuard],
    },
    {
        path: 'welcome-to-mood-board',
        loadComponent: () => LandingpageComponent,
    },
    {
        path: 'about',
        loadComponent : () => AboutComponent
    },
    {
        path:'login',
        loadComponent: () => LoginComponent
    },
    {
        path:'register',
        loadComponent: () => RegisterComponent
    }
];
