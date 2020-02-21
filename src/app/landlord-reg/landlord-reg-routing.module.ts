import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandlordRegPage } from './landlord-reg.page';

const routes: Routes = [
  {
    path: '',
    component: LandlordRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRegPageRoutingModule {}
