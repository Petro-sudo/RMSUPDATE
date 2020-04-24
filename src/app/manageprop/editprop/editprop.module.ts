import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpropPageRoutingModule } from './editprop-routing.module';

import { EditpropPage } from './editprop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpropPageRoutingModule
  ],
  declarations: [EditpropPage]
})
export class EditpropPageModule {}
