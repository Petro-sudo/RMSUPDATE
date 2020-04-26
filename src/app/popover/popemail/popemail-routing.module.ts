import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopemailPage } from './popemail.page';

const routes: Routes = [
  {
    path: '',
    component: PopemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopemailPageRoutingModule {}
