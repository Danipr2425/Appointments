import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyClientsPageRoutingModule } from './my-clients-routing.module';

import { MyClientsPage } from './my-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyClientsPageRoutingModule
  ],
  declarations: [MyClientsPage]
})
export class MyClientsPageModule {}
