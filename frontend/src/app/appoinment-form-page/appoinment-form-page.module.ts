import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoinmentFormPagePageRoutingModule } from './appoinment-form-page-routing.module';

import { AppoinmentFormPagePage } from './appoinment-form-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AppoinmentFormPagePageRoutingModule
  ],
  declarations: [AppoinmentFormPagePage]
})
export class AppoinmentFormPagePageModule {}
