import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HadminPageRoutingModule } from './hadmin-routing.module';

import { HadminPage } from './hadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HadminPageRoutingModule
  ],
  declarations: [HadminPage]
})
export class HadminPageModule {}
