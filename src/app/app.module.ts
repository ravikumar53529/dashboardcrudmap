import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardserviceService} from './services/dashboardservice.service'
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ChartModule} from 'primeng/chart';
import {KnobModule} from 'primeng/knob';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {TestComponent } from './test/test.component';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import { MapComponent } from './map/map.component';


MapComponent
@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TestComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,ReactiveFormsModule,
    MenubarModule,SlideMenuModule,
    TieredMenuModule,
    PanelMenuModule,
    ChartModule,
    KnobModule,
    CalendarModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule
  ],
  providers: [DashboardserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
