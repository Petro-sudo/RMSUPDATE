import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagepropPageRoutingModule } from './manageprop-routing.module';

import { ManagepropPage } from './manageprop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagepropPageRoutingModule
  ],
  declarations: [ManagepropPage]
})
export class ManagepropPageModule {}
