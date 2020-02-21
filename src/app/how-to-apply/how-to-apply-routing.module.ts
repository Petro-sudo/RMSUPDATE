import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToApplyPage } from './how-to-apply.page';

const routes: Routes = [
  {
    path: '',
    component: HowToApplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToApplyPageRoutingModule {}
