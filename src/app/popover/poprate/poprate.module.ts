import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopratePageRoutingModule } from './poprate-routing.module';

import { PopratePage } from './poprate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopratePageRoutingModule
  ],
  declarations: [PopratePage]
})
export class PopratePageModule {}
