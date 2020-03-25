import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditlordprofPage } from './editlordprof.page';

const routes: Routes = [
  {
    path: '',
    component: EditlordprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditlordprofPageRoutingModule {}
