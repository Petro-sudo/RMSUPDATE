import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudregisterPage } from './studregister.page';

const routes: Routes = [
  {
    path: '',
    component: StudregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudregisterPageRoutingModule {}
