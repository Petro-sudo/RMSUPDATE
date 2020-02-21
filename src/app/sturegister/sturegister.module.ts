import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SturegisterPageRoutingModule } from './sturegister-routing.module';

import { SturegisterPage } from './sturegister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SturegisterPageRoutingModule
  ],
  declarations: [SturegisterPage]
})
export class SturegisterPageModule {}
