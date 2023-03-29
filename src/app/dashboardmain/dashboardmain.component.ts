import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-dashboardmain',
  templateUrl: './dashboardmain.component.html',
  styleUrls: ['./dashboardmain.component.scss']
})
export class DashboardmainComponent implements OnInit {
  items!: MenuItem[];
  constructor(private routerRef:Router){}
  ngOnInit() {
      this.items = [
          {
              label: 'Dashboard',
              items: [{
                      label: 'New',
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {label: 'Project'},
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {label: 'Quit'}
              ],
              command:()=>this.onDashboard(),
          },
          {
              label: 'Profile',
              icon: 'pi pi-fw pi-pencil',
              command:()=>this.onProfile(),
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        }
      ];
  }

  public onProfile(){
   this.routerRef.navigateByUrl('dashboardmain/profile')
  }
  public onDashboard(){
    this.routerRef.navigateByUrl('dashboardmain/defaultdashboard')
  }
}
