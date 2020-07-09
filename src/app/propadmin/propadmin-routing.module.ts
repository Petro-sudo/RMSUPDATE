import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropadminPage } from './propadmin.page';

const routes: Routes = [
  {
    path: '',
    component: PropadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropadminPageRoutingModule {}
