import { Component } from '@angular/core';
/* Pages */
import { ScanPage } from '../scan/scan';
import { InfosPage } from '../infos/infos';
import { HomePage } from '../home/home';
/* Native Components */
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/* Nom de la base de donnée */
const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  /* Variable qui va contenir la base de donnée */
  private db: SQLiteObject;

  tab1Root = HomePage;
  tab2Root = ScanPage;
  tab3Root = InfosPage;

  constructor(private sqlite: SQLite) {
    this.createDatabaseFile();
  }

  /* Méthode pour crée la base de donnée */
  private createDatabaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        console.log('Base de donnée créée!');
        this.db = db;
        this.createTable();
      })
      .catch(e => console.log(e));
  }

  /* Méthode pour crée la table */
  private createTable(): void {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `oeuvres` ( `id` INTEGER, `lastname` TEXT, `firstname` TEXT, `image` TEXT, `qrcode` INTEGER, `checked` INTEGER, PRIMARY KEY(`id`) )', {})
      .then(() => {
        console.log('Table créée!');
      })
      .catch(e => console.log(e));

  }



}
