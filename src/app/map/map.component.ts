import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { DashboardserviceService } from '../services/dashboardservice.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
 // Call the initMap function once the Maps API has loaded
 map!: mapboxgl.Map;
 style = 'mapbox://styles/mapbox/streets-v11';
 public latitude:number=0;
 public longitude:number=0;
 public systemId:string='';
 
 constructor(private serviceRef:DashboardserviceService) {}

 ngOnInit() {
  //for automatic logout 
  this.serviceRef.start(60000)
  navigator.geolocation.getCurrentPosition((response)=>{
    this.latitude=response.coords.latitude;
    this.longitude=response.coords.longitude;
    this.systemId=navigator.userAgent;
    mapboxgl as typeof mapboxgl;
   this.map = new mapboxgl.Map({
     accessToken:
       'pk.eyJ1IjoiZHBpZXRyb2NhcmxvIiwiYSI6ImNram9tOGFuMTBvb3oyeXFsdW5uYmJjNGQifQ._zE6Mub0-Vpl7ggMj8xSUQ',
     container: 'map',
     style: this.style,
     zoom: 18,
     center: [this.longitude, this.latitude],
   });
  })
   
   // Add map controls
   this.map.addControl(new mapboxgl.NavigationControl());  
 }
 //onActivity mouse activity
 public onActivity():void{
  console.log("hello")
  this.serviceRef.reset()
 }
 
}
