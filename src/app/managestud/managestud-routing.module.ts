import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagestudPage } from './managestud.page';

const routes: Routes = [
  {
    path: '',
    component: ManagestudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagestudPageRoutingModule {}
