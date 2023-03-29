import { Component,ElementRef ,ViewChild,AfterViewInit,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { josnPlaceholder, josnPlaceholderchild } from '../../interfaces/josnplaceholder';
import { DashboardserviceService } from '../../services/dashboardservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  @ViewChild('canvas',{static:true}) canvas!:ElementRef;
  @ViewChild('myVideoCanvas',{static:true}) videocanvas!:ElementRef;
  @ViewChild('newVideoplayer') myVideopl!: ElementRef;
  uploadedImage!:File;
   waterImg='../../assets/images/sebi2.png'
  //imag22
  @ViewChild('imageElement') imageElement!: ElementRef;
  @ViewChild('videoElement') videoElement!: ElementRef;
  public addDetailsPopup:boolean=false;
  public updatePopup:boolean=false;
  public userId:number=0;
 
  public userDataForUpdateForm:josnPlaceholder={
    userId: 0,
    title: '',
    body: '',
    id: 0
  }
  public tempImg:string='';
  jsonplaceData:josnPlaceholder[]=[]
  //map
  constructor(private serviceRef:DashboardserviceService,private fb:FormBuilder){}
  ngOnInit(){
    this.getMockApi();
    navigator.geolocation.getCurrentPosition((response)=>{
      const latitude=response.coords.latitude;
      const longitude=response.coords.longitude;   
      console.log(latitude)
      console.log(longitude)
      console.log()
    })
  }
  public getMockApi():void{
    this.serviceRef.getjsonPlaceholder().subscribe((data)=>{
      console.log(data)
      this.jsonplaceData=data;
     
     })
  }

  //onAddDetails
  public onAddDetails():void{
    this.addDetailsPopup=true

  }

  form:FormGroup=new FormGroup({
    userId:new FormControl('',[]),
    title:new FormControl('',[]),
    body:new FormControl('',[]),
    gender:new FormControl('',[]),
    fruits:new FormGroup({
      fruit1:new FormControl(false),
      fruit2:new FormControl(false),
      fruit3:new FormControl(false)
    })
  })
  //update form
  updateForm:FormGroup=new FormGroup({
    userId:new FormControl('',[]),
    title:new FormControl('',[]),
    body:new FormControl('',[])
  })
  post:josnPlaceholderchild={
    userId: 0,
    title: '',
    body: ''
  }
  //posting data
 public  onsubmit():void{
    this.post=this.form.value
    if(confirm("Do you want to add")==true){
      this.serviceRef.postJsonData(this.post).subscribe((data)=>{ 
        this.getMockApi()   
      })
      this.addDetailsPopup=false
    }else{
      alert("Adding details action is canceled")
      this.addDetailsPopup=false;
    }
    
  }
  public onUpdatejson(id:number,data:josnPlaceholder){
  this.updatePopup=true
  this.userId=id
  this.updateForm=new FormGroup({
    userId:new FormControl(data.userId,[]),
    title:new FormControl(data.title,[]),
    body:new FormControl(data.body,[])
  })
  }

  //onUpdate()
  public onUpdate():void{
    if(confirm("Do you want to update")==true){
      this.serviceRef.updateJsonplaceholder(this.userId,this.updateForm.value).subscribe((data)=>{
        console.log(data)
      })
      this.updatePopup=false
      this.getMockApi()
    }else{
      alert("Update action is canceled")
      this.updatePopup=false
    }
    
  }
  public deleteStatus:boolean=false
 public  onDeletejson(id:number):void{
    if(confirm("Do you want to delete")==true){
      this.serviceRef.deleteJsonData(id).subscribe(()=>{   
        this.getMockApi()
      })
    }else{
      alert("Delete action not performed")
    }
    
  }
  //closeUpdatePopup
  public closeUpdatePopup():void{
        this.updatePopup=false
  }
  //closeUpdatePopup
  public closeAddPopup():void{
    this.addDetailsPopup=false
}


  private imageSrc!: string;
  public videoUrl!:string;


  loadImage2() {
    this.imageSrc = 'https://picsum.photos/800/600/?random';
    this.imageElement.nativeElement.src = this.imageSrc;
  }
  addWatermarkForImage2() {
    if (this.imageSrc) {
      const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
      const context = canvas.getContext('2d');
      const watermark = new Image();
      watermark.src = this.waterImg
      watermark.onload = () => {
        const image = this.imageElement.nativeElement;
        canvas.width = image.width;
        canvas.height = image.height;
        context!.drawImage(image, 0, 0);
        const x = image.width - watermark.width - 350;
        const y = image.height - watermark.height - 280;
        context!.drawImage(watermark, x, y);  
      };
    } 
  }
  

}


