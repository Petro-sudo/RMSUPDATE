import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelplordPageRoutingModule } from './helplord-routing.module';

import { HelplordPage } from './helplord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelplordPageRoutingModule
  ],
  declarations: [HelplordPage]
})
export class HelplordPageModule {}
