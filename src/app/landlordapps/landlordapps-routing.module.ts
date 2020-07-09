import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandlordappsPage } from './landlordapps.page';

const routes: Routes = [
  {
    path: '',
    component: LandlordappsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordappsPageRoutingModule {}
