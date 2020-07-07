import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagestudentPageRoutingModule } from './managestudent-routing.module';

import { ManagestudentPage } from './managestudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagestudentPageRoutingModule
  ],
  declarations: [ManagestudentPage]
})
export class ManagestudentPageModule {}
