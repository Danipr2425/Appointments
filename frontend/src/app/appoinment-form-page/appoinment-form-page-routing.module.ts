import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoinmentFormPagePage } from './appoinment-form-page.page';

const routes: Routes = [
  {
    path: '',
    component: AppoinmentFormPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoinmentFormPagePageRoutingModule {}
