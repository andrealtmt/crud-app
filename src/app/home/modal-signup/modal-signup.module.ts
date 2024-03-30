import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSignupPageRoutingModule } from './modal-signup-routing.module';

import { ModalSignupPage } from './modal-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSignupPageRoutingModule
  ],
  declarations: [ModalSignupPage]
})
export class ModalSignupPageModule {}
