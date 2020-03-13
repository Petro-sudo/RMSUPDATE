import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LordprofilePage } from './lordprofile.page';

const routes: Routes = [
  {
    path: '',
    component: LordprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LordprofilePageRoutingModule {}
