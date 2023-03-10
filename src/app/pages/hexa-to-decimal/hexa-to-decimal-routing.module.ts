import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HexaToDecimalPage } from './hexa-to-decimal.page';

const routes: Routes = [
  {
    path: '',
    component: HexaToDecimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HexaToDecimalPageRoutingModule {}
