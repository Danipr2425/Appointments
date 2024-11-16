import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAppoinmentsWeekPage } from './my-appoinments-week.page';

const routes: Routes = [
  {
    path: '',
    component: MyAppoinmentsWeekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAppoinmentsWeekPageRoutingModule {}
