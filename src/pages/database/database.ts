import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
/* Native Components */
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/* Nom de la base de donnée */
const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  selector: 'page-database',
  templateUrl: 'database.html'
})
export class DatabasePage {

  /* Variable qui va contenir la base de donnée */
  private db: SQLiteObject;

  /* Déclaration d'un nouveau tableau */
  oeuvresData = [];

  constructor(public navCtrl: NavController, private sqlite: SQLite, public platform: Platform) {
    this.createDatabaseFile();
  }

  /* Crée la base de donnée */
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

  /* Supprimer la table SI NÉCESSAIRE ! */
  /* private dropTable(): void {
    this.db.executeSql('DROP TABLE `oeuvres`', {})
      .then(() => {
        console.log('Table supprimée!');
      })
      .catch(e => console.log(e));
  } */

  /* Crée la table */
  private createTable(): void {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `oeuvres` ( `id` INTEGER, `lastname` TEXT, `firstname` TEXT, `image` TEXT, `qrcode` INTEGER, `checked` INTEGER, PRIMARY KEY(`id`) )', {})
      .then(() => {
        console.log('Table créée!');
        this.insertEvent();
      })
      .catch(e => console.log(e));
  }

  /* Insérer les données */
  private insertEvent(): void {
    this.db.executeSql("INSERT INTO `oeuvres` VALUES (1,'ALVAREZ','Jean-pierre','9213750369.jpg',9213750369,0)," +
      "(2,'ARAI','Poeragui','6510403686.jpg',6510403686,0)," +
      "(3,'CHANSIN','Jérôme','7216899933.jpg',7216899933,0)," +
      "(4,'CHEUNG-SEN','Jonas','1629568455.jpg',1629568455,0)," +
      "(5,'CUNY','Heimana','9266553664.jpg',9266553664,0)," +
      "(6,'EBB','Nicolas','1168085824.jpg',1168085824,0)," +
      "(7,'LEHARTEL','Alexandre','2791010818.jpg',2791010818,0)," +
      "(8,'LENOIR','Tetuaoro','4173047359.jpg',4173047359,0)," +
      "(9,'LONGINE','Manaarii','9782420312.jpg',9782420312,0)," +
      "(10,'LY','Joane','6872232276.jpg',6872232276,0)," +
      "(11,'MARO','Teremu','1234567890.jpg',1234567890,0)," +
      "(12,'MONACO','Vaitiare','4653519064.jpg',4653519064,0)," +
      "(13,'PAEAHI','Ariipaea','3658034121.jpg',3658034121,0)," +
      "(14,'PAMBRUN','Aito','5175547403.jpg',5175547403,0)," +
      "(15,'PAMBRUN','Hiomai','9520532017.jpg',9520532017,0)," +
      "(16,'PEREZ','Rahiti','1228597258.jpg',1228597258,0)," +
      "(17,'PERRY','Matihamu','5480211371.jpg',5480211371,0)," +
      "(18,'ROUSSEL','Christian','2462643924.jpg',2462643924,0)," +
      "(19,'TEHUPE','Tinirau','5055364030.jpg',5055364030,0)," +
      "(20,'TEMATAHOTOA','Tinirau','6232447902.jpg',6232447902,0)," +
      "(21,'TOOFA','Teparii','4235066246.jpg',4235066246,0);", {})
      .then(() => {
        console.log('Oeuvres insérées!');
      })
      .catch(e => console.log(e));
  }

  /* Afficher les données insérées */
  public retrieveEvent() {
    this.db.executeSql('SELECT * FROM `oeuvres`', {})
      .then((data) => {
        console.log(data.rows.item[0]);
        if (data == null) {
          return;
        }
        if (data.rows) {
          if (data.rows.lenght > 0) {
            console.log('data length');
            for (let i = 0; i < data.rows.length; i++) {
              this.oeuvresData.push(data.rows.item(i));
            }
          }
        }
      })
  }

}
