import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResproofPageRoutingModule } from './resproof-routing.module';

import { ResproofPage } from './resproof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResproofPageRoutingModule
  ],
  declarations: [ResproofPage]
})
export class ResproofPageModule {}
