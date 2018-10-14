import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { MuralComponent } from './mural/mural.component';
import { ControllerService } from './shared/controller.service';
import { NovoCardComponent } from './novo-card/novo-card.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { CardsPerfilComponent } from './cards-perfil/cards-perfil.component';
import { PerfilEditarComponent } from './perfil-editar/perfil-editar.component';
import { EditarCardComponent } from './editar-card/editar-card.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';
import { ComentariosComponent } from './comentarios/comentarios.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('77402829032-r2b4ou83dvovirk9pl9t5os1n7o2kti1.apps.googleusercontent.com')
        }
      ]
    );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardsComponent,
    LoginComponent,
    MuralComponent,
    NovoCardComponent,
    PesquisaComponent,
    PerfilComponent,
    FooterComponent,
    CardsPerfilComponent,
    PerfilEditarComponent,
    EditarCardComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    ControllerService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
