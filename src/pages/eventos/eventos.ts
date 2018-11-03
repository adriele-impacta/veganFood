import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoPage } from '../../pages/evento/evento';

@Component({
  selector: 'page-home',
  templateUrl: 'eventos.html'
})
export class EventosPage {
  constructor(public navCtrl: NavController) {
  }
  verEvento() {
    this.navCtrl.push(EventoPage);
  }
}