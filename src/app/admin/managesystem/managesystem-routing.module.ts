import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagesystemPage } from './managesystem.page';

const routes: Routes = [
  {
    path: '',
    component: ManagesystemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagesystemPageRoutingModule {}
