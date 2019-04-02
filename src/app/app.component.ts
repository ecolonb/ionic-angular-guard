// import { Component } from '@angular/core';

// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html'
// })
// export class AppComponent {
//   constructor(
//     private platform: Platform,
//     private splashScreen: SplashScreen,
//     private statusBar: StatusBar
//   ) {
//     this.initializeApp();
//   }

//   initializeApp() {
//     this.platform.ready().then(() => {
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();
//     });
//   }
// }

import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  usuario: string = "logged";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Aqui se utulliza un obervable => Siempŕe esta subcrito al cambio de login
      this.authenticationService.authenticationState.subscribe(state => {

        console.log('this.authenticationService.pageLoading:_ ', this.authenticationService.pageLoading)
        if (this.authenticationService.pageLoading === "loading") {
          this.router.navigate(['loading']);
        } else {
          if (state) {
            console.log('Si es un tipo de usuario => Redireccionar a cyalquier parte')
            if (this.usuario == "logged") {
              this.router.navigate(['auth', 'home']);
            } else {
              this.router.navigate(['test']);
            }
          } else {
            this.router.navigate(['login']);
          }
        }

        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });

    });
  }
}