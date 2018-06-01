import { Component } from '@angular/core';
/* Pages */
import { ScanPage } from '../scan/scan';
import { InfosPage } from '../infos/infos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ScanPage;
  tab3Root = InfosPage;

  constructor() {

  }
}
