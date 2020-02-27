import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MbombelaPageRoutingModule } from './mbombela-routing.module';

import { MbombelaPage } from './mbombela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MbombelaPageRoutingModule
  ],
  declarations: [MbombelaPage]
})
export class MbombelaPageModule {}
