import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandlordRegPageRoutingModule } from './landlord-reg-routing.module';

import { LandlordRegPage } from './landlord-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandlordRegPageRoutingModule
  ],
  declarations: [LandlordRegPage]
})
export class LandlordRegPageModule {}
