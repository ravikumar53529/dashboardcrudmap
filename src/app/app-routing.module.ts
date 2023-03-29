
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DashboardserviceService } from './services/dashboardservice.service';
// import {myCanActivateFn} from '../assets/gaurds/auth.guard'
import { TestComponent } from './test/test.component';
import { MapComponent } from './map/map.component';
// import { AuthGuard } from 'src/assets/gaurds/auth.guard';
import { AuthgaurdService } from './gaurds/authgaurd.service';
import { UsersgaurdService } from './gaurds/usersgaurd.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent,canActivate:[UsersgaurdService]
  },
  {
    path:'test',component:TestComponent
  },
  {
    path:'map',component:MapComponent
  },
  { path: 'userregister', loadChildren: () => import('./userregister/userregister.module').then(m => m.UserregisterModule) },
  { path: 'dashboardmain', loadChildren: () => import('./dashboardmain/dashboardmain.module').then(m => m.DashboardmainModule),canActivate:[AuthgaurdService] },
  {
    path:'**',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
