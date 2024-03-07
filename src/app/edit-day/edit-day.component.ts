import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  CheckboxChangeEventDetail,
  IonCheckbox,
  ModalController,
} from '@ionic/angular';
import { TrainingUnit } from '../shared/models/TrainingUnit.model';
import { IonCheckboxCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-edit-day',
  templateUrl: './edit-day.component.html',
  styleUrls: ['./edit-day.component.scss'],
})
export class EditDayComponent {
  @ViewChildren(IonCheckbox) Checkboxes!: QueryList<IonCheckbox>;
  @Input() Date!: String;
  @Input() TrainingUnit!: TrainingUnit;

  plane =
    localStorage['plane'] != undefined
      ? JSON.parse(localStorage['plane'])
      : new Array<TrainingUnit>();
  canDismiss?: boolean;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(
      { index: this.Date, unit: this.TrainingUnit },
      'confirm'
    );
  }

  clicked(name: string, checked: boolean) {
    this.canDismiss = checked;
    if (!checked) 
      return;

    this.Checkboxes.filter((value) => value.name != name).forEach(
      (value) => (value.checked = false)
    );
  }

  next() {
    var checkbox = this.Checkboxes.filter((value) => value.checked)[0];
    var unit = this.plane[checkbox.value];
    this.TrainingUnit = JSON.parse(JSON.stringify(unit));
    // Hier plan kopieren
  }
  
}
