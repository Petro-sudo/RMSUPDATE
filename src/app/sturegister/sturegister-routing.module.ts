import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SturegisterPage } from './sturegister.page';

const routes: Routes = [
  {
    path: '',
    component: SturegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SturegisterPageRoutingModule {}
