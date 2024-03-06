import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AlertController, RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-informationen',
  templateUrl: './informationen.page.html',
  styleUrls: ['./informationen.page.scss'],
})
export class InformationenPage {
@Output() saved = new EventEmitter();
  constructor(private alertController: AlertController) {
    console.log(localStorage);
  }

  info = localStorage["infos"] != undefined ? JSON.parse(localStorage["infos"]) : {};
  
  async speichern() {
    const alert = await this.alertController.create({
      buttons: [{
        text: "Speichern",
        handler: (newInfo) => this.info.push(newInfo)
      }
    ]})
  }

  save() {
    let infoAsText = JSON.stringify(this.info);
    console.log(infoAsText);
    localStorage.setItem ("infos",infoAsText);
    this.saved.emit();
  }

}
