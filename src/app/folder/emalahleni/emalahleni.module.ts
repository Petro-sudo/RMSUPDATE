import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmalahleniPageRoutingModule } from './emalahleni-routing.module';

import { EmalahleniPage } from './emalahleni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmalahleniPageRoutingModule
  ],
  declarations: [EmalahleniPage]
})
export class EmalahleniPageModule {}
