import { Component } from '@angular/core';
/* Pages */
import { DatabasePage } from '../database/database';
import { InfosPage } from '../infos/infos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  /* tab2Root = SqlitePage; */
  tab3Root = InfosPage;
  tab4Root = DatabasePage;

  constructor() {
  }



}
