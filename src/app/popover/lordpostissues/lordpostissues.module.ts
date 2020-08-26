import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LordpostissuesPageRoutingModule } from './lordpostissues-routing.module';

import { LordpostissuesPage } from './lordpostissues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LordpostissuesPageRoutingModule
  ],
  declarations: [LordpostissuesPage]
})
export class LordpostissuesPageModule {}
