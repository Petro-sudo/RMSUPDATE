import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudProfilePageRoutingModule } from './stud-profile-routing.module';

import { StudProfilePage } from './stud-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudProfilePageRoutingModule
  ],
  declarations: [StudProfilePage]
})
export class StudProfilePageModule {}
