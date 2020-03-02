import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolokwanePageRoutingModule } from './polokwane-routing.module';

import { PolokwanePage } from './polokwane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolokwanePageRoutingModule
  ],
  declarations: [PolokwanePage]
})
export class PolokwanePageModule {}
