import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAppoinmentPageRoutingModule } from './update-appoinment-routing.module';

import { UpdateAppoinmentPage } from './update-appoinment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateAppoinmentPageRoutingModule
  ],
  declarations: [UpdateAppoinmentPage]
})
export class UpdateAppoinmentPageModule {}
