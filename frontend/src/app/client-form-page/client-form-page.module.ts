import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientFormPagePageRoutingModule } from './client-form-page-routing.module';

import { ClientFormPagePage } from './client-form-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClientFormPagePageRoutingModule
  ],
  declarations: [ClientFormPagePage]
})
export class ClientFormPagePageModule {}
