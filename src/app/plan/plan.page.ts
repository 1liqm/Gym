import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertInput, IonAlert } from '@ionic/angular';
import { NEVER } from 'rxjs';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';
import { TrainingUnit } from '../shared/models/TrainingUnit.model';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage {
  
  @ViewChild('alert') alert!: IonAlert;
  message = 'This modal example uses the modalController to present and dismiss modals.';
  constructor(private modalCtrl: ModalController) {}

  test = [" "]; 
  plane = localStorage['plane'] != undefined ? JSON.parse(localStorage['plane']) : new Array<TrainingUnit>
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
      let unit = new TrainingUnit();
      unit.name = event.detail.data.values[0];
      this.plane.push(unit);
      await this.save();
  
    }
    async openModal(index: number) {
      const modal = await this.modalCtrl.create({
        component: EditPlanComponent,
        componentProps:{
          index:index,
          TrainingUnit:this.plane[index],
        },
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      if (role === 'confirm') {
        console.log(data);
        this.plane[data.index] = data.unit;
        await this.save();
        
      }
    }
}
