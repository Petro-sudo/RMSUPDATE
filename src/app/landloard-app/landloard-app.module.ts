import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandloardAppPageRoutingModule } from './landloard-app-routing.module';

import { LandloardAppPage } from './landloard-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandloardAppPageRoutingModule
  ],
  declarations: [LandloardAppPage]
})
export class LandloardAppPageModule {}
