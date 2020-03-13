import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LordprofilePageRoutingModule } from './lordprofile-routing.module';

import { LordprofilePage } from './lordprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LordprofilePageRoutingModule
  ],
  declarations: [LordprofilePage]
})
export class LordprofilePageModule {}
