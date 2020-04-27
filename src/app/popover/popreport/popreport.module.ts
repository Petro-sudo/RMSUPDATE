import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopreportPageRoutingModule } from './popreport-routing.module';

import { PopreportPage } from './popreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopreportPageRoutingModule
  ],
  declarations: [PopreportPage]
})
export class PopreportPageModule {}
