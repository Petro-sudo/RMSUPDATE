import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PretoriaPageRoutingModule } from './pretoria-routing.module';

import { PretoriaPage } from './pretoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PretoriaPageRoutingModule
  ],
  declarations: [PretoriaPage]
})
export class PretoriaPageModule {}
