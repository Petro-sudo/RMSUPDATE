import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageproviderPageRoutingModule } from './manageprovider-routing.module';

import { ManageproviderPage } from './manageprovider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageproviderPageRoutingModule
  ],
  declarations: [ManageproviderPage]
})
export class ManageproviderPageModule {}
