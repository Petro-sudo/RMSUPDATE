import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandloardAppPage } from './landloard-app.page';

const routes: Routes = [
  {
    path: '',
    component: LandloardAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandloardAppPageRoutingModule {}
