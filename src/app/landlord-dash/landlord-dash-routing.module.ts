import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandlordDashPage } from './landlord-dash.page';

const routes: Routes = [
  {
    path: '',
    component: LandlordDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordDashPageRoutingModule {}
