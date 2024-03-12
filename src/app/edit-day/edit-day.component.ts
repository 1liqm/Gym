import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  IonCheckbox,
  ModalController,
} from '@ionic/angular';
import { TrainingUnit } from '../shared/models/TrainingUnit.model';
import { ExerciseSet } from '../shared/models/ExerciseSet.model';

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

  async next() {
    var checkbox = this.Checkboxes.filter((value) => value.checked)[0];
    var unit = this.plane[checkbox.value];
    this.TrainingUnit = JSON.parse(JSON.stringify(unit));
    
    // Über alle Exercises(TrainingUnit.Exercise) schleifen und Exercise.exerciseSet füllen mit fill(new ExerciseSet(), 0, exercise.sets)
    for (const exercise of this.TrainingUnit.Exercise) {
      for (let index = 0; index < exercise.sets; index++) {
        exercise.exerciseSet.push(new ExerciseSet());
      }
    }
  }

  setchange(changedValue: any, index: number) {
    if (changedValue == null)
      return;

    const value = parseInt(changedValue);
    let exercise = this.TrainingUnit.Exercise[index];
    exercise.sets = value;

    if(exercise.exerciseSet.length == value)
      return;


    if (exercise.exerciseSet.length > value)
    {
      exercise.exerciseSet = exercise.exerciseSet.slice(0, value);
    }
    else
    {
      const newEntries = new Array(value - exercise.exerciseSet.length).fill(new ExerciseSet());
      exercise.exerciseSet = exercise.exerciseSet.concat(newEntries);
    }
  }
}
