import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoshanguvePage } from './soshanguve.page';

const routes: Routes = [
  {
    path: '',
    component: SoshanguvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoshanguvePageRoutingModule {}
