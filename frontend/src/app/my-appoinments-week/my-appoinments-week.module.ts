import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppoinmentsWeekPageRoutingModule } from './my-appoinments-week-routing.module';

import { MyAppoinmentsWeekPage } from './my-appoinments-week.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyAppoinmentsWeekPageRoutingModule
  ],
  declarations: [MyAppoinmentsWeekPage]
})
export class MyAppoinmentsWeekPageModule {}
