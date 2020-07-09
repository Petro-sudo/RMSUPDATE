import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandlordappsPageRoutingModule } from './landlordapps-routing.module';

import { LandlordappsPage } from './landlordapps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandlordappsPageRoutingModule
  ],
  declarations: [LandlordappsPage]
})
export class LandlordappsPageModule {}
