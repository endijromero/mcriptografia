import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtbashPage } from './atbash.page';

const routes: Routes = [
  {
    path: '',
    component: AtbashPage
  },
  {
    path: 'cifrar',
    loadChildren: () => import('./cifrar/cifrar.module').then( m => m.CifrarPageModule)
  },
  {
    path: 'descifrar',
    loadChildren: () => import('./descifrar/descifrar.module').then( m => m.DescifrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtbashPageRoutingModule {}
