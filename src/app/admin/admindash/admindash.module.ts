import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmindashPageRoutingModule } from './admindash-routing.module';

import { AdmindashPage } from './admindash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmindashPageRoutingModule
  ],
  declarations: [AdmindashPage]
})
export class AdmindashPageModule {}
