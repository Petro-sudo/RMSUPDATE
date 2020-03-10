import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfPageRoutingModule } from './edit-prof-routing.module';

import { EditProfPage } from './edit-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfPageRoutingModule
  ],
  declarations: [EditProfPage]
})
export class EditProfPageModule {}
