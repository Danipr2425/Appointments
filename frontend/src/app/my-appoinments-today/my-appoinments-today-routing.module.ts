import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAppoinmentsTodayPage } from './my-appoinments-today.page';

const routes: Routes = [
  {
    path: '',
    component: MyAppoinmentsTodayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAppoinmentsTodayPageRoutingModule {}
