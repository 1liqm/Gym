import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AlertController, RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-informationen',
  templateUrl: './informationen.page.html',
  styleUrls: ['./informationen.page.scss'],
})
export class InformationenPage {

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
  }

}
/* 
async speichern(){
const alert = await this.alertController.create({
buttons: [{
  text: "Speichern",
  handler: (newInfo) => {
   this.info.push(newInfo); 
  }
}]
}
)

}
save(){
 let itemsAsText = JSON.stringify(this.info);
 localStorage.setItem("items",itemsAsText);
}
} */

NgModel um die Propertie von einer Komponente zb. InformationenPage mit einem Inoutfeld zu verknüpfen,