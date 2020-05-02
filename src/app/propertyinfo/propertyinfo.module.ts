import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyinfoPageRoutingModule } from './propertyinfo-routing.module';

import { PropertyinfoPage } from './propertyinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyinfoPageRoutingModule
  ],
  declarations: [PropertyinfoPage]
})
export class PropertyinfoPageModule {}
