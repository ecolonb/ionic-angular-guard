// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   constructor() { }
// }

import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticationState = new BehaviorSubject(false);
  public pageLoading: string = "loading";

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    console.log('Checking token: ');
    this.storage.get(TOKEN_KEY).then(res => {
      this.pageLoading = "loaded"

      setTimeout(() => {
        if (res) {

          this.authenticationState.next(true);
        } else {
          this.authenticationState.next(false);
        }
      }, 4000);

    })
  }


  login() {
    return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
      this.pageLoading = "loaded"
      this.authenticationState.next(true);
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.pageLoading = "loaded"
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}