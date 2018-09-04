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
  private loading: boolean;

  constructor(
    private controller: ControllerService,
    private socialAuthService: AuthService
  ) {
    this.serverStatus = false;
    this.loading = false;
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
    }).then(data => {
      this.loading = true;
    }).then(a => {
      this.controller.log(name, email, image);
    });
  }

}
