import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarankuaPageRoutingModule } from './garankua-routing.module';

import { GarankuaPage } from './garankua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarankuaPageRoutingModule
  ],
  declarations: [GarankuaPage]
})
export class GarankuaPageModule {}
