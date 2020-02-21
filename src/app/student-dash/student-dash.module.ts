import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentDashPageRoutingModule } from './student-dash-routing.module';

import { StudentDashPage } from './student-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentDashPageRoutingModule
  ],
  declarations: [StudentDashPage]
})
export class StudentDashPageModule {}
