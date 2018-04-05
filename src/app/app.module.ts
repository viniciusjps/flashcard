import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { MuralComponent } from './mural/mural.component';
import { ControllerService } from './shared/controller.service';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { NovoCardComponent } from './novo-card/novo-card.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardsComponent,
    LoginComponent,
    MuralComponent,
    CadastroUsuarioComponent,
    NovoCardComponent,
    PesquisaComponent,
    PerfilComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
