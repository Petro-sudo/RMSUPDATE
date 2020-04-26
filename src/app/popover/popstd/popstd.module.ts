import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopstdPageRoutingModule } from './popstd-routing.module';

import { PopstdPage } from './popstd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopstdPageRoutingModule
  ],
  declarations: [PopstdPage]
})
export class PopstdPageModule {}
