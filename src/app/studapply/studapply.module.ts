import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudapplyPageRoutingModule } from './studapply-routing.module';

import { StudapplyPage } from './studapply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudapplyPageRoutingModule
  ],
  declarations: [StudapplyPage]
})
export class StudapplyPageModule {}
