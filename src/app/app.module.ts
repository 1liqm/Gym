import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationenPageModule } from './informationen/informationen.module';
import { HomePageModule } from './home/home.module';
import { KalenderPageModule } from './kalender/kalender.module';
import { PlanPageModule } from './plan/plan.module';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { FormsModule } from '@angular/forms';
import { EditDayComponent } from './edit-day/edit-day.component';

@NgModule({
  declarations: [AppComponent,EditPlanComponent,EditDayComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule, IonicModule.forRoot({})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
