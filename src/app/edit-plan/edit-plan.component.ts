
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController, RefresherCustomEvent,ModalController } from '@ionic/angular';
import { TrainingUnit } from '../shared/models/TrainingUnit.model';
import { Exercise } from '../shared/models/Exercise.model';


@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.scss'],
})
export class EditPlanComponent {
  @Input() index!: number;
  @Input() TrainingUnit!: TrainingUnit;
  @Output() saved = new EventEmitter();

  name?: string;
  Test?: string;

  constructor(private modalCtrl: ModalController) {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({index: this.index, unit: this.TrainingUnit}, 'confirm');
  }

  async add() {
    this.TrainingUnit.Exercise.push(new Exercise());
    this.TrainingUnit.Exercise = [...this.TrainingUnit.Exercise];
  }
}

