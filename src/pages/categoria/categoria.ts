import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private app: App) {
  }

  ionViewDidLoad() {
    this.app.getRootNav().setRoot(CategoriaPage);
  }

  abrirProduto(): void {
    this.navCtrl.setRoot('TabsPage');
  }

}
