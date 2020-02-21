import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoshanguvePageRoutingModule } from './soshanguve-routing.module';

import { SoshanguvePage } from './soshanguve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoshanguvePageRoutingModule
  ],
  declarations: [SoshanguvePage]
})
export class SoshanguvePageModule {}
