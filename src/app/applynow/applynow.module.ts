import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplynowPageRoutingModule } from './applynow-routing.module';

import { ApplynowPage } from './applynow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplynowPageRoutingModule
  ],
  declarations: [ApplynowPage]
})
export class ApplynowPageModule {}
