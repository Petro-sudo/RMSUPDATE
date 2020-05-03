import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopaddPageRoutingModule } from './popadd-routing.module';

import { PopaddPage } from './popadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopaddPageRoutingModule
  ],
  declarations: [PopaddPage]
})
export class PopaddPageModule {}
