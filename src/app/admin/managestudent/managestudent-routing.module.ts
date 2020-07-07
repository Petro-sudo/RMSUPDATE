import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagestudentPage } from './managestudent.page';

const routes: Routes = [
  {
    path: '',
    component: ManagestudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagestudentPageRoutingModule {}
