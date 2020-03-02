import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';


const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },  {
    path: 'arcadia',
    loadChildren: () => import('./arcadia/arcadia.module').then( m => m.ArcadiaPageModule)
  },
  {
    path: 'arts',
    loadChildren: () => import('./arts/arts.module').then( m => m.ArtsPageModule)
  },
  {
    path: 'polokwane',
    loadChildren: () => import('./polokwane/polokwane.module').then( m => m.PolokwanePageModule)
  },
  {
    path: 'emalahleni',
    loadChildren: () => import('./emalahleni/emalahleni.module').then( m => m.EmalahleniPageModule)
  },
  {
    path: 'mbombela',
    loadChildren: () => import('./mbombela/mbombela.module').then( m => m.MbombelaPageModule)
  },
  {
    path: 'pretoria',
    loadChildren: () => import('./pretoria/pretoria.module').then( m => m.PretoriaPageModule)
  },
  {
    path: 'garankua',
    loadChildren: () => import('./garankua/garankua.module').then( m => m.GarankuaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
