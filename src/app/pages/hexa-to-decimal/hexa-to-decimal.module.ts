import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HexaToDecimalPageRoutingModule } from './hexa-to-decimal-routing.module';

import { HexaToDecimalPage } from './hexa-to-decimal.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HexaToDecimalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HexaToDecimalPage]
})

export class HexaToDecimalPageModule { }
