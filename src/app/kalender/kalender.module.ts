import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { KalenderPageRoutingModule } from './kalender-routing.module';

import { KalenderPage } from './kalender.page';
import { HomePageRoutingModule } from '../home/home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalenderPageRoutingModule,
    HomePageRoutingModule,
  ],
  declarations: [KalenderPage]
})
export class KalenderPageModule {}
