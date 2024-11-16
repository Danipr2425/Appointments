import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-appoinments',
    loadChildren: () => import('./my-appoinments/my-appoinments.module').then( m => m.MyAppoinmentsPageModule)
  },
  {
    path: 'appoinment-form-page',
    loadChildren: () => import('./appoinment-form-page/appoinment-form-page.module').then( m => m.AppoinmentFormPagePageModule)
  },
  {
    path: 'update-appoinment/:id',
    loadChildren: () => import('./update-appoinment/update-appoinment.module').then(m => m.UpdateAppoinmentPageModule)
  },
  {
    path: 'my-appoinments-today',
    loadChildren: () => import('./my-appoinments-today/my-appoinments-today.module').then( m => m.MyAppoinmentsTodayPageModule)
  },
  {
    path: 'my-appoinments-week',
    loadChildren: () => import('./my-appoinments-week/my-appoinments-week.module').then( m => m.MyAppoinmentsWeekPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
