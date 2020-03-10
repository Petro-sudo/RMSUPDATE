import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfPage } from './edit-prof.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfPageRoutingModule {}
