import { Component ,OnInit} from '@angular/core';
import { DashboardserviceService } from '../services/dashboardservice.service';
import {FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import {Logindata} from '../interfaces/logindata';
import {Router, Routes } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginFormData!:FormGroup;
  public credentialsData:Logindata[]=[];
  public spinner:boolean=false;
  public loginData:Logindata={
    id: 0,
    username: '',
    password: '',
    role:''
  }
  public userAuthenticationKey:boolean=false;
  public isUsersAuthenticationKey:boolean=false;
 constructor( private dashboardSerivceRef:DashboardserviceService ,private formBuilderRef:FormBuilder,public routerRef:Router){}
  ngOnInit(): void {
    this.getLoginForm();
    this.getCredentials();
  }
  

  //get credenetialsData
   public getCredentials():void{
     try{
      this.dashboardSerivceRef.getCredetentials().subscribe((data)=>{
        this.credentialsData=data;
        console.log(this.credentialsData)
      })
     } catch(error){
     console.log(error,'error')
     }
     
   }
  //load loginForm
 public  getLoginForm():void {
  this.loginFormData=this.formBuilderRef.group({
    username:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-Z0-9]+$')])
  })
 }
 //login form data
 public onLoginFormData():void{
  this.spinner=true
  setTimeout(()=>{
    this.loginData=this.loginFormData.value;
    if(this.loginFormData.value){
      this.credentialsData.filter((data)=>{
        if((data.username === this.loginData.username) && (data.password ===this.loginData.password) &&(false)){
          this.userAuthenticationKey=true;
          localStorage.setItem("isAuthenticate",'true')
          this.dashboardSerivceRef.userAuthenticationStatusFromLogin(this.userAuthenticationKey)
          // this.routerRef.navigateByUrl('/dashboard')
          this.spinner=false
          alert("hello")
          this.routerRef.navigateByUrl('/dashboardmain')
          console.log(localStorage.getItem("userauthenticationvalue")) 
        }
        else if(true){
          this.isUsersAuthenticationKey=true;
          localStorage.setItem('isUsersAuthentication','true')
          this.routerRef.navigateByUrl('/dashboard')
        }else{
          this.routerRef.navigateByUrl('/login')
        }
      })
    }else{
      alert("please fill the form")
    }
  },2000)
 
 }

 //get form fields for validations 

 public get username(){
  return this.loginFormData.get('username')
 }
 public get password(){
  return this.loginFormData.get('password')
 }
}
