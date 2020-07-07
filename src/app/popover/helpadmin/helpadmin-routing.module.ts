import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpadminPage } from './helpadmin.page';

const routes: Routes = [
  {
    path: '',
    component: HelpadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpadminPageRoutingModule {}
