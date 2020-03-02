import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudAppPageRoutingModule } from './stud-app-routing.module';

import { StudAppPage } from './stud-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudAppPageRoutingModule
  ],
  declarations: [StudAppPage]
})
export class StudAppPageModule {}
