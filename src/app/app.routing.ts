import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { MuralComponent } from './mural/mural.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'mural', component: MuralComponent},
    { path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
