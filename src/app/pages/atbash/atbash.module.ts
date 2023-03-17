import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtbashPageRoutingModule } from './atbash-routing.module';

import { AtbashPage } from './atbash.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtbashPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AtbashPage]
})
export class AtbashPageModule { }
