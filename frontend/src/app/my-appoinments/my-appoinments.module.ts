import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppoinmentsPageRoutingModule } from './my-appoinments-routing.module';

import { MyAppoinmentsPage } from './my-appoinments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyAppoinmentsPageRoutingModule
  ],
  declarations: [MyAppoinmentsPage]
})
export class MyAppoinmentsPageModule {}
