import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopemailPageRoutingModule } from './popemail-routing.module';

import { PopemailPage } from './popemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopemailPageRoutingModule
  ],
  declarations: [PopemailPage]
})
export class PopemailPageModule {}
