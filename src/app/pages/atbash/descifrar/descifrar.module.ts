import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescifrarPageRoutingModule } from './descifrar-routing.module';

import { DescifrarPage } from './descifrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescifrarPageRoutingModule
  ],
  declarations: [DescifrarPage]
})
export class DescifrarPageModule {}
