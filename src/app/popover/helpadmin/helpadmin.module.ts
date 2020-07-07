import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpadminPageRoutingModule } from './helpadmin-routing.module';

import { HelpadminPage } from './helpadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpadminPageRoutingModule
  ],
  declarations: [HelpadminPage]
})
export class HelpadminPageModule {}
