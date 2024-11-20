import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyClientsPage } from './my-clients.page';

const routes: Routes = [
  {
    path: '',
    component: MyClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyClientsPageRoutingModule {}
