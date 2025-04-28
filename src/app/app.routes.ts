import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { LandingpageComponent } from './layout/landingpage/landingpage.component';
import { LoginComponent } from './layout/login/login.component';
import { authGuard } from './guard/auth.guard';
import { NotfoundComponent } from './layout/notfound/notfound.component';

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
        path: '**',
        loadComponent: () => NotfoundComponent

    }
];
