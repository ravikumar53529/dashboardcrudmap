import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmainComponent } from './dashboardmain.component';
import { DefaultdashboardComponent } from './defaultdashboard/defaultdashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  
{ path: '', component: DashboardmainComponent ,
children:[
  {
     path:'',component:DefaultdashboardComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'defaultdashboard',component:DefaultdashboardComponent
  }
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardmainRoutingModule { }
