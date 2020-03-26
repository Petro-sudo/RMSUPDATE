
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sturegister',
    loadChildren: () => import('./sturegister/sturegister.module').then( m => m.SturegisterPageModule)

  },
  {
    path: 'landlord-reg',
    loadChildren: () => import('./landlord-reg/landlord-reg.module').then( m => m.LandlordRegPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'stud-orlord',
    loadChildren: () => import('./stud-orlord/stud-orlord.module').then( m => m.StudORlordPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'stud-profile',
    loadChildren: () => import('./stud-profile/stud-profile.module').then( m => m.StudProfilePageModule)
  },
  {
    path: 'soshanguve',
    loadChildren: () => import('./soshanguve/soshanguve.module').then( m => m.SoshanguvePageModule)
  }
  ,
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'studapply',
    loadChildren: () => import('./studapply/studapply.module').then( m => m.StudapplyPageModule)
  },
  {
    path: 'process',
    loadChildren: () => import('./process/process.module').then( m => m.ProcessPageModule)
  },

  {
    path: 'stud-app',
    loadChildren: () => import('./stud-app/stud-app.module').then( m => m.StudAppPageModule)
  },
  {

    path: 'edit-prof',
    loadChildren: () => import('./edit-prof/edit-prof.module').then( m => m.EditProfPageModule)
  },
  {

    path: 'resproof',
    loadChildren: () => import('./resproof/resproof.module').then( m => m.ResproofPageModule)
  },
  {
  path: 'how-to-apply',
  loadChildren: () => import('./how-to-apply/how-to-apply.module').then( m => m.HowToApplyPageModule)
   },
  {
    path: 'landloard-app',
    loadChildren: () => import('./landloard-app/landloard-app.module').then( m => m.LandloardAppPageModule)
  },
  {
    path: 'landlord-dash',
    loadChildren: () => import('./landlord-dash/landlord-dash.module').then( m => m.LandlordDashPageModule)
  },
  {
    path: 'editlordprof',
    loadChildren: () => import('./editlordprof/editlordprof.module').then( m => m.EditlordprofPageModule)
  },
  {
    path: 'managestud',
    loadChildren: () => import('./managestud/managestud.module').then( m => m.ManagestudPageModule)
  },
  {
    path: 'manageprop',
    loadChildren: () => import('./manageprop/manageprop.module').then( m => m.ManagepropPageModule)
  },
  {
    path: 'viewproperties',
    loadChildren: () => import('./manageprop/viewproperties/viewproperties.module').then( m => m.ViewpropertiesPageModule)
  },
  {
    path: 'applynow',
    loadChildren: () => import('./applynow/applynow.module').then( m => m.ApplynowPageModule)
  },
  
  {
    path: 'studstatus',
    loadChildren: () => import('./studstatus/studstatus.module').then( m => m.StudstatusPageModule)

  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
