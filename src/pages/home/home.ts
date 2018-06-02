import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  /* Animated Ionic Splash Page */
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController) {

    /* Animated Ionic Splash Page */
    this.tabBarElement = document.querySelector('.tabbar');
  }

  /* Animated Ionic Splash Page */
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 3000);
  }


}
