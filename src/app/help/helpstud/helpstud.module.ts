import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpstudPageRoutingModule } from './helpstud-routing.module';

import { HelpstudPage } from './helpstud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpstudPageRoutingModule
  ],
  declarations: [HelpstudPage]
})
export class HelpstudPageModule {}
