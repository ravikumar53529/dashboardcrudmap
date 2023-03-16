import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregisterComponent } from './userregister.component';

const routes: Routes = [{ path: '', component: UserregisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserregisterRoutingModule { }
