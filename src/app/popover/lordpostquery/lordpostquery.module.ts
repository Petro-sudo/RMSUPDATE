import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LordpostqueryPageRoutingModule } from './lordpostquery-routing.module';

import { LordpostqueryPage } from './lordpostquery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LordpostqueryPageRoutingModule
  ],
  declarations: [LordpostqueryPage]
})
export class LordpostqueryPageModule {}
