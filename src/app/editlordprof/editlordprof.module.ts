import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditlordprofPageRoutingModule } from './editlordprof-routing.module';

import { EditlordprofPage } from './editlordprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditlordprofPageRoutingModule
  ],
  declarations: [EditlordprofPage]
})
export class EditlordprofPageModule {}
