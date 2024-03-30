import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSignupPage } from './modal-signup.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSignupPageRoutingModule {}
