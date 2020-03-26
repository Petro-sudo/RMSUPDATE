import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplynowPage } from './applynow.page';

const routes: Routes = [
  {
    path: '',
    component: ApplynowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplynowPageRoutingModule {}
