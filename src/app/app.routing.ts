import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { MuralComponent } from './mural/mural.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NovoCardComponent } from './novo-card/novo-card.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'mural', component: MuralComponent},
    { path: 'login', component: LoginComponent},
    { path: 'login/cadastro', component: CadastroUsuarioComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'perfil/novo-card', component: NovoCardComponent},
    { path: 'pesquisar', component: PesquisaComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
