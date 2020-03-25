import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpropertiesPageRoutingModule } from './viewproperties-routing.module';

import { ViewpropertiesPage } from './viewproperties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpropertiesPageRoutingModule
  ],
  declarations: [ViewpropertiesPage]
})
export class ViewpropertiesPageModule {}
