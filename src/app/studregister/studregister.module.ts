import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudregisterPageRoutingModule } from './studregister-routing.module';

import { StudregisterPage } from './studregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudregisterPageRoutingModule
  ],
  declarations: [StudregisterPage]
})
export class StudregisterPageModule {}
