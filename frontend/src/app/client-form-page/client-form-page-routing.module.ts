import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientFormPagePage } from './client-form-page.page';

const routes: Routes = [
  {
    path: '',
    component: ClientFormPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientFormPagePageRoutingModule {}
