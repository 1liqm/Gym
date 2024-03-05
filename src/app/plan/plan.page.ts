import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertInput, IonAlert } from '@ionic/angular';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage {
  
  @ViewChild('alert') alert!: IonAlert;

  test = [" "];
  plane = localStorage['plane'] != undefined ? JSON.parse(localStorage['plane']) : new Array;
  public alertButtons = [
    {
      text: 'Hinzufügen'
    },
  ];
  public alertInputs : AlertInput[] = [
    {
      id: 'name-input',
      placeholder: ("Name"),
      //onclick: clear.p
    },

  ];
  
  async openAlert()
  {
    (document.getElementById('name-input') as HTMLInputElement).value = "";
    this.alert.present();
  }

  async save() {
    this.plane = [...this.plane];
    let planeAsText = JSON.stringify(this.plane);
    localStorage.setItem('plane', planeAsText);
  }

  async onAddItem(event: any)
  {
      if (event.detail.data == undefined || event.detail.data.values == undefined)
        return;
      this.plane.push(event.detail.data.values[0]);
      await this.save();
  }
}
