import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CifrarPage } from './cifrar.page';

const routes: Routes = [
  {
    path: '',
    component: CifrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CifrarPageRoutingModule {}
