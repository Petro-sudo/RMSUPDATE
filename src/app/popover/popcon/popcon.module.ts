import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopconPageRoutingModule } from './popcon-routing.module';

import { PopconPage } from './popcon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopconPageRoutingModule
  ],
  declarations: [PopconPage]
})
export class PopconPageModule {}
