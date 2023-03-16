import { Component ,OnInit ,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { Dashboard ,usersMainData,OrderedandDelivered} from '../interfaces/dashboard';
import {Table2,Status,VisitorsPost} from '../interfaces/table'
import { DashboardserviceService } from '../services/dashboardservice.service';
import {MenuItem} from 'primeng/api';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {
  @ViewChild('canvas',{static:true}) canvas!:ElementRef;
  @ViewChild('videoElement') video!: ElementRef;
  @ViewChild('canvasElement') canvasElement!: ElementRef;
  public dashboardData:Dashboard[]=[];
  public userAuthValue:boolean=false;
  public items:MenuItem[]=[];
  public dashboardUsersData:usersMainData[]=[];
  public orderedAndDeliveredData:OrderedandDelivered[]=[]
  //watermark image
  uploadedImage!:File;
  //video watermark
  public watermarkText = 'SEBI';
  public videoSource!: Blob;
  public  isVideoLoaded = false;
  public watermarkedVideoUrl!: string ;
  public showDialog:boolean=false;
  public showUpdateDialog:boolean=false;
  public newDetailsAddedForm!:FormGroup;
  public idForUpdate:number=0;
  //table similar to visitor data but data is from local json
  public realTableData:Table2[]=[]
  //for visitor table
  public visitorsData:Table2[]=[]
  //status 
  public statusValues:Status[]=[]
  public testImage:string=''
  public options: any = {
    text: 'SEBI SEBI SEBI\nSEBI SEBI SEBI\SEBI SEBI SEBI SEBI font',
    width: 350,
    height: 300,
    fontFamily: 'Kanit',
    color: 'red',
    alpha: 0.7,
    degree: -80,
    fontSize: '20px',
};
  constructor(private dashboardServiceRef:DashboardserviceService,private router:Router,private fb:FormBuilder){}
   
  
  
  public  ngOnInit(): void {
    this.getDashboardData();
    this.getMenuBar();
    this.getDashboardRealData()
    //load status values
    this.loadStatusValues()
    //load  formgroup and fields
    this.newAddDetails()
    //api get
    this.getVisitorsData() 
  }
  ngAfterViewInit(): void {
 this.video.nativeElement.addEventListener('loadedmetadata', () => {
      this.isVideoLoaded = true;
      this.canvas.nativeElement.width = this.video.nativeElement.videoWidth;
      this.canvas.nativeElement.height = this.video.nativeElement.videoHeight;
    });
  }
  onVideoFileSelected(event: any): void {
    const file = event.target.files[0];
    this.videoSource = new Blob([file], { type: file.type });
    this.loadVideo();
  }
  private loadVideo(): void {
    const videoURL = URL.createObjectURL(this.videoSource);
    this.video.nativeElement.src = videoURL;
  }
  private drawWatermark(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.drawImage(this.video.nativeElement, 0, 0);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText(this.watermarkText, 100, 100);
  }
  public downloadWatermarkedVideo(): void {
    if (!this.isVideoLoaded) {
      console.log('Video is not loaded yet!');
      return;
    }

    this.drawWatermark();
    // const canvasDataURL = this.canvas.nativeElement.toDataURL();
    // const video = this.video.nativeElement;
    // const videoWidth = video.videoWidth;
    // const videoHeight = video.videoHeight;
    // const videoFPS = 30;
    // const downloadLink = document.createElement('a');
    // downloadLink.href = canvasDataURL;
    // downloadLink.download = 'watermarked-video.mp4';
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
    // document.body.removeChild(downloadLink);

    //  this.watermarkedVideoUrl = canvasDataURL.replace('data:image/png;base64,', 'data:video/mp4;base64,');
  }
  public getMenuBar():void{
    this.items = [
        {
            label:'Dashboard',
            icon:'pi pi-fw pi-home',
            
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            command:()=>this.onTest(),
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                },
  
            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus',
  
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus',
  
                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    },
  
                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off',
            command:()=>this.onLogout()
        }
    ];
  }
  public getDashboardData():void{
    try{
      this.dashboardServiceRef.getDashboardData().subscribe((data)=>{
      this.dashboardData=data
      }) 
    }catch(error){
     console.log(error,'error')
    }
  }
  public onLogout():void{
    localStorage.setItem("isAuthenticate",'false')
    console.log(localStorage.getItem("userauthenticationvalue"))
    this.router.navigateByUrl('/login')
  }

  public onTest():void{
    this.router.navigateByUrl('/test')
  }

  //onimagefile selected
  public onFileSelected(event:any):void{
  this.uploadedImage=event.target.files[0];
  this.loadImage()
  }
  //
  public loadImage():void{
  const reader=new FileReader();//new filereader object
  reader.onload=()=>{
    const img=new Image();
    img.onload=()=>{
      this.drawWaterMark(img)
    };
    img.src=reader.result as string;
  };
  reader.readAsDataURL(this.uploadedImage)
  } 
  public drawWaterMark(img:HTMLImageElement){
   const canvas=this.canvas.nativeElement;
   const ctx=canvas.getContext('2d');
   canvas.width=img.width;
   canvas.height=img.height;
   ctx.drawImage(img,0,0);
   ctx.font='30px Arial'
   ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText('SEBI', 50, 50);
    console.log(canvas.toDataURL())
    this.testImage=canvas.toDataURL()
  }
  
  //get visitors data
  public getDashboardRealData():void{
    try{
     this.dashboardServiceRef.getDashboardTableData().subscribe((data)=>{
      this.realTableData=data
     })
    }catch(error){
      console.log(error,"error")
    }
  }

 //validations

 //onImageUploadForGps
 onImageUploadForGps():void{
  console.log("gps")
  if (!this.isGPSEnabled()) {
    if (confirm('GPS is not enabled. Do you want to enable it?')) {
      this.enableGPS();
    }
  }else{
    alert('GPS enabled')
  }
  // rest of the image upload logic
 }
 isGPSEnabled(): boolean {
  if ('geolocation' in navigator) {
    return true;
  } else {
    return false;
  }
}
enableGPS(): void {
  navigator.geolocation.getCurrentPosition(
    position => {
      console.log('GPS enabled', position);
    },
    error => {
    console.log('GPS error', error);
    }
  );
}

  //load status values 
  public loadStatusValues():void{
    this.statusValues=[{
      "name":"pending"
    },
    {
      "name":"completed"
    }
  ]
  }

  public newAddDetails():void{
    this.newDetailsAddedForm=this.fb.group(
      {
        rcNumber:new FormControl('',[Validators.required]),
        defaulterName:new FormControl('',[Validators.required]),
        matterName:new FormControl('',[Validators.required]),
        purposeOfVisit:new FormControl('',[Validators.required]),
        surveyorId:new FormControl('',[Validators.required]),
      }
    )
   }
  //  public post:VisitorsPost={
  //   rcNumber:this.newDetailsAddedForm.value.rcNumber,
  //   defaulterName:this.newDetailsAddedForm.value.defaulterName,
  //   matterName:this.newDetailsAddedForm.value.matterName,
  //   purposeOfVisit:this.newDetailsAddedForm.value.purposeOfVisit,
  //   surveyorId:this.newDetailsAddedForm.value.surveyorId
  //  }

    //validations
  public get rcNumber(){
    return this.newDetailsAddedForm.get('rcNumber')
  }
  public get  defaulterName(){
    return this.newDetailsAddedForm.get('defaulterName')
  }
  public get matterName(){
    return this.newDetailsAddedForm.get('matterName')
  }
  public get purposeOfVisit(){
    return this.newDetailsAddedForm.get('purposeOfVisit')
  }
  public get surveyorId(){
    return this.newDetailsAddedForm.get('surveyorId')
  }
//dialog for add
public openNew():void{
  this.showDialog=true;
  }

  //hideDialog for add
 public  hideDialog():void{
    this.showDialog=false
  }

//dialog for edit data
public editVisitorsDialog(data:Table2,id:number):void{
  this.showUpdateDialog=true
  this.idForUpdate=id
 }

 public hideUpdateDialog():void{
  this.showUpdateDialog=false
 }

 //get apiVisitors Data
 public  getVisitorsData():void{
  try{
    this.dashboardServiceRef.getVisitorsDataFromEndpoint().subscribe((data:any)=>{
      this.visitorsData=data.visits
      console.log(this.visitorsData)
    })
  }catch(error){
    console.log(error,'error')
  } 
  }

//saveVisitors data and post through api
saveVisitorsData():void{
  try{
 this.dashboardServiceRef.postVisitorsData(this.newDetailsAddedForm.value).subscribe(()=>{
  this.getVisitorsData()
 })
 alert("saved successfully")
 this.showDialog=false
  }catch(error){
    console.log(error,'error')
  }
}
  
  //update 
 public  updateVisitorsData(id:number):void{
  try{
    this.dashboardServiceRef.updatingVisitorsData(this.newDetailsAddedForm.value,this.idForUpdate).subscribe(()=>{
     console.log("data edited successfully")
    })
   }catch(error){
    console.log(error,'error')
   }
  }

  //delete visitors data
  public deleteVisitorsData(id:number):void{
    try{
     this.dashboardServiceRef.deleteVisitorsData(id).subscribe(()=>{
      console.log('data deleted successfully')
     })
    }catch(error){
      console.log(error,'error')
    }
    }
  
}
