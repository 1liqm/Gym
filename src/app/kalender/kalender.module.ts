import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalenderPageRoutingModule } from './kalender-routing.module';

import { KalenderPage } from './kalender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalenderPageRoutingModule
  ],
  declarations: [KalenderPage]
})
export class KalenderPageModule {}
