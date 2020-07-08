import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoppropPageRoutingModule } from './popprop-routing.module';

import { PoppropPage } from './popprop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoppropPageRoutingModule
  ],
  declarations: [PoppropPage]
})
export class PoppropPageModule {}
