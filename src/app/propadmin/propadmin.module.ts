import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropadminPageRoutingModule } from './propadmin-routing.module';

import { PropadminPage } from './propadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropadminPageRoutingModule
  ],
  declarations: [PropadminPage]
})
export class PropadminPageModule {}
