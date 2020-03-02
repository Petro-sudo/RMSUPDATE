import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcadiaPageRoutingModule } from './arcadia-routing.module';

import { ArcadiaPage } from './arcadia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcadiaPageRoutingModule
  ],
  declarations: [ArcadiaPage]
})
export class ArcadiaPageModule {}
