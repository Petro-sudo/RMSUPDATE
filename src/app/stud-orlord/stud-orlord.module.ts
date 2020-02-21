import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudORlordPageRoutingModule } from './stud-orlord-routing.module';

import { StudORlordPage } from './stud-orlord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudORlordPageRoutingModule
  ],
  declarations: [StudORlordPage]
})
export class StudORlordPageModule {}
