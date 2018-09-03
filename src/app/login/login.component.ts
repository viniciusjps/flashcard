import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ControllerService } from './../shared/controller.service';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private serverStatus: boolean;

  constructor(
    private controller: ControllerService,
    private socialAuthService: AuthService
  ) {
    this.serverStatus = false;
  }

  ngOnInit() {
    if (!this.serverStatus) {
      this.controller.turnOnServer()
      .then(a => {
        this.serverStatus = true;
      });
    }
  }

  public socialSignIn() {
    let name = '';
    let email = '';
    let image = '';
    let socialPlatformProvider;

    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        name = userData.name;
        email = userData.email;
        image = userData.image;
      }
    ).then(data => {
      this.controller.log(name, email, image);
    });
  }

  public newUser() {
    let name = '';
    let email = '';
    let image = '';
    let socialPlatformProvider;

    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        name = userData.name;
        email = userData.email;
        image = userData.image;
      }
    ).then(a => {
      this.controller.addUser(name,email,image);
    })
    .then(b => {
      this.controller.logIn(email);
    });
  }

}
