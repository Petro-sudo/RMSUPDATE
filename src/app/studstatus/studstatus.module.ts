import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudstatusPageRoutingModule } from './studstatus-routing.module';

import { StudstatusPage } from './studstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudstatusPageRoutingModule
  ],
  declarations: [StudstatusPage]
})
export class StudstatusPageModule {}
