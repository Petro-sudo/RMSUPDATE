import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowToApplyPageRoutingModule } from './how-to-apply-routing.module';

import { HowToApplyPage } from './how-to-apply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowToApplyPageRoutingModule
  ],
  declarations: [HowToApplyPage]
})
export class HowToApplyPageModule {}
