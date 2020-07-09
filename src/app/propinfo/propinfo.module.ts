import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropinfoPageRoutingModule } from './propinfo-routing.module';

import { PropinfoPage } from './propinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropinfoPageRoutingModule
  ],
  declarations: [PropinfoPage]
})
export class PropinfoPageModule {}
