import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
/* Pages */
import { InfosPage } from '../infos/infos';
import { HomePage } from '../home/home';
/* Native Components */
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
/* Components */
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab3Root = InfosPage;

  /* Concernant le scan */
  result: BarcodeScanResult;
  optionsBcs: BarcodeScannerOptions;
  optionsIab: InAppBrowserOptions;
  url: string = "http://tcc.1click.pf/museum/index.php?mat=XJSLW7ZGD9&oeuvre=";

  constructor(public navCtrl: NavController, public platform: Platform, private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController, private iab: InAppBrowser) {

  }

  /* Options & Activation de Barcode Scanner */
  public scanBarcode() {
    this.optionsBcs = {
      prompt: 'Visez Code Barre',
      disableSuccessBeep: true,
      showTorchButton: true,
      showFlipCameraButton: true,
    };
    this.barcodeScanner.scan(this.optionsBcs)
      .then(res => {
        this.result = res;
        this.openUrl()
      })
      .catch(err => {
        this.toastCtrl.create({
          message: err.message
        }).present();
      });
  }

  /* Rediriger le scan vers l'url */
  public openUrl() {
    this.iab.create(this.url + this.result.text, '_system', this.optionsIab);
  }

}
