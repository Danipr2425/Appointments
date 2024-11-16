import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAppoinmentsPage } from './my-appoinments.page';


const routes: Routes = [
  {
    path: '',
    component: MyAppoinmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAppoinmentsPageRoutingModule {}
