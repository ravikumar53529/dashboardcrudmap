import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UserregisterComponent } from './userregister.component';

const routes: Routes = [
  { path: '', component: UserregisterComponent },
  {path:'forgetpassword',component:ForgetpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserregisterRoutingModule { }
