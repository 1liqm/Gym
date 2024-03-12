import { Component, OnInit } from '@angular/core';
import { EditDayComponent } from '../edit-day/edit-day.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.page.html',
  styleUrls: ['./kalender.page.scss'],
})
export class KalenderPage {
  constructor(private modalCtrl: ModalController) {}

  Day: {[index: string]:any} = 
  localStorage['Day'] != undefined
    ? JSON.parse(localStorage['Day'])
    : {};
  
  onChange(arg0: string | string[] | null | undefined) {
    console.log(arg0);
    
    if (typeof arg0 != "string")
      return

    this.openModal(arg0);
  }

  async openModal(date: string) {
    
    const modal = await this.modalCtrl.create({
      component: EditDayComponent,
      componentProps: {
        Date: date,
        TrainingUnit: this.Day[this.removeTime(date)]
      },
    });
    
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
     this.Day[this.removeTime(data.index)] = data.unit
     this.save();
    }
  }
  async save() {
    let dayAsText = JSON.stringify(this.Day);
    localStorage.setItem('Day', dayAsText);

  }

  removeTime(date: string):string
  {
    return date.split('T')[0];
  }
}
