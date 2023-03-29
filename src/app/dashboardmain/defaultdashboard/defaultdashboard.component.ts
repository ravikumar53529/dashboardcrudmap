import { Component ,OnInit} from '@angular/core';
import { DashboardserviceService } from 'src/app/services/dashboardservice.service';

@Component({
  selector: 'app-defaultdashboard',
  templateUrl: './defaultdashboard.component.html',
  styleUrls: ['./defaultdashboard.component.scss']
})
export class DefaultdashboardComponent {
constructor(private  serRef:DashboardserviceService ){}
public realData:any=[]
ngOnInit(){
  // this.serRef.getJsonPlaceholderData().subscribe((data)=>{
  //   console.log(data)
  //   this.realData=data
  // })
}

}
