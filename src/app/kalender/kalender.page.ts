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
  
  onChange(arg0: string | string[] | null | undefined) {
    console.log(arg0);
    
    if (typeof arg0 != "string")
      return

    this.openModal(arg0);
  }

  async openModal(date: String) {
    
    const modal = await this.modalCtrl.create({
      component: EditDayComponent,
      componentProps: {
        Date: date,
      },
    });
    
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data);
      //this.plane[data.index] = data.unit;
      //await this.save();
    }
  }
}
