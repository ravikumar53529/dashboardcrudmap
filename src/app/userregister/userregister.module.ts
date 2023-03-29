import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserregisterRoutingModule } from './userregister-routing.module';
import { UserregisterComponent } from './userregister.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
@NgModule({
  declarations: [
    UserregisterComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    UserregisterRoutingModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class UserregisterModule { }
