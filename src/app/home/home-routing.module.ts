import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'modal-login',
    loadChildren: () => import('./modal-login/modal-login.module').then( m => m.ModalLoginPageModule)
  },
  {
    path: 'modal-signup',
    loadChildren: () => import('./modal-signup/modal-signup.module').then( m => m.ModalSignupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
