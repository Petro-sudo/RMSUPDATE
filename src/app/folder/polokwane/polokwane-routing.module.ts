import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolokwanePage } from './polokwane.page';

const routes: Routes = [
  {
    path: '',
    component: PolokwanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolokwanePageRoutingModule {}
