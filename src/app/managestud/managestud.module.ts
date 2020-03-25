import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagestudPageRoutingModule } from './managestud-routing.module';

import { ManagestudPage } from './managestud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagestudPageRoutingModule
  ],
  declarations: [ManagestudPage]
})
export class ManagestudPageModule {}
