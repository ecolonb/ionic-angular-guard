import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
// import { LoginService } from '../../services/login.service';
// import { BitacoraService } from '../../services/bitacora.service';
// import { ConductorService } from '../../services/conductor.service';
// import { AppConfiguracionService } from 'src/app/services/app-configuracion.service';
// import { UnidadService } from '../../services/unidad.service';
// import { SyncUpService } from '../../services/sync-up.service';
// import { ConfiguracionPage } from '../configuracion/configuracion.page';
// import { ConfiguracionServicioPage } from '../configuracion-servicio/configuracion-servicio.page';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
// import { Device } from '@ionic-native/device/ngx';
// UniqueDeviceID
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // @ViewChild(Slides) slides: Slides;
  public loading: any = undefined;
  public myModal = undefined;
  public usuario: string = '';
  public contrasenia: string = '';
  public strLoginOkProvider: string = 'false';
  // public menuPage: any = MenuPage;
  // public uidDevice: string;
  // public platformDevice: string;
  // public versionPlatformDevice: string;
  // public modelDevice: string;
  public ObjLoginDevice: any;
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthenticationService,
    private modalController: ModalController,
    private platform: Platform
  ) {
    this.strLoginOkProvider = 'false';
    if (this.platform.is('cordova')) {

    } else {
      this.ObjLoginDevice = {
        uid: '-',
        platform: 'desktop',
        model: '-',
        versionPlatform: '-',
        user: '',
        password: ''
      };
    }
  }

  ngOnInit() {
    // Verifica si hay sevicios y actividades pnedientes

  }
  ionViewWillEnter() {
    console.log('Will enter: ');
  }

  public ingresar() {
  }
  public async loginUserAndPassword(formData: any) {

  }
  public ngAfterViewInit() {
    // this.slides.lockSwipes(true);
    // this.slides.freeMode = false;
    // this.slides.paginationType = 'progress';
  }
  public async openConfigModal() {
    // this.myModal.present();

    // this.myModal = await this.modalController.create({
    //   component: this.configuracionPage,
    //   componentProps: { value: 123 }
    // });
    // return await this.myModal.present();
  }

  public dismissModal() {
    // this.myModal.dismiss();
  }
  async presentAlertPrompt() {
    const textEx = "http://was.asasa.ssasa.";
    const alert = await this.alertController.create({
      header: 'Configuración',
      inputs: [
        {
          name: 'url_endPoint',
          type: 'text',
          placeholder: 'Url servicios web',
          value: textEx
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: (data) => {
            console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await alert.present();
  }
  login() {

    this.authService.login();
  }

}
