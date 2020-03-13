import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandlordDashPageRoutingModule } from './landlord-dash-routing.module';

import { LandlordDashPage } from './landlord-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandlordDashPageRoutingModule
  ],
  declarations: [LandlordDashPage]
})
export class LandlordDashPageModule {}
