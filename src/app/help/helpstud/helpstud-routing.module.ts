import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpstudPage } from './helpstud.page';

const routes: Routes = [
  {
    path: '',
    component: HelpstudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpstudPageRoutingModule {}
