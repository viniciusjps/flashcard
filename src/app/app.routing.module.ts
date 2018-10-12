import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { MuralComponent } from './mural/mural.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NovoCardComponent } from './novo-card/novo-card.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { EditarCardComponent } from './editar-card/editar-card.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'mural', component: MuralComponent},
    { path: 'login', component: LoginComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'perfil/novo-card', component: NovoCardComponent},
    { path: 'perfil/editar-card', component: EditarCardComponent},
    { path: 'pesquisar', component: PesquisaComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
