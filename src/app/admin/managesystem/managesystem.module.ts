import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagesystemPageRoutingModule } from './managesystem-routing.module';

import { ManagesystemPage } from './managesystem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagesystemPageRoutingModule
  ],
  declarations: [ManagesystemPage]
})
export class ManagesystemPageModule {}
