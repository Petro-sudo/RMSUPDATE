import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmindashPage } from './admindash.page';

const routes: Routes = [
  {
    path: '',
    component: AdmindashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmindashPageRoutingModule {}
