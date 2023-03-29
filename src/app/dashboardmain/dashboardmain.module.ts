import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardmainRoutingModule } from './dashboardmain-routing.module';
import { DashboardmainComponent } from './dashboardmain.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { ProfileComponent } from './profile/profile.component';
import { DefaultdashboardComponent } from './defaultdashboard/defaultdashboard.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    DashboardmainComponent,
    ProfileComponent,
    DefaultdashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardmainRoutingModule,
    PanelMenuModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    MenubarModule,
    SidebarModule,
    InputTextModule,
    
  ]
})
export class DashboardmainModule { }
