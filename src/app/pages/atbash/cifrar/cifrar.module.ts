import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CifrarPageRoutingModule } from './cifrar-routing.module';

import { CifrarPage } from './cifrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CifrarPageRoutingModule
  ],
  declarations: [CifrarPage]
})
export class CifrarPageModule {}
