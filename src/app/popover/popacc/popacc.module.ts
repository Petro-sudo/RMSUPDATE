import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopaccPageRoutingModule } from './popacc-routing.module';

import { PopaccPage } from './popacc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopaccPageRoutingModule
  ],
  declarations: [PopaccPage]
})
export class PopaccPageModule {}
