import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Logindata} from '../interfaces/logindata';
import {Dashboard} from '../interfaces/dashboard';
import {Table2, VisitorsPost} from '../interfaces/table';
import {josnPlaceholder,josnPlaceholderchild,jsonPlaceholderChild2} from '../interfaces/josnplaceholder'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {
public credentialsData='../../assets/data/credential.json';
public dashboardData='../../assets/data/dashboard.json';
public dashboardTable='../../assets/data/table.json';
public apiEndPoint='api/visits';
public apiEndPointPost='api/admin/id';
public mockApi='http://localhost:3000';
public jsonMockApi:string='https://jsonplaceholder.typicode.com/todos/'
public timeOut:any;
public userAuthentication:boolean=false;
public temp:string='';
public tempUserAuthentication:boolean=false
  constructor(private httpRef:HttpClient,private router:Router) { }
  public canActivate():boolean{
    const isAuthenticate = localStorage.getItem('isAuthenticate');
    if(isAuthenticate==='true'){
      return true
    }else{
      this.router.navigateByUrl('/login')
      return false
    }
    }
  public getCredetentials():Observable<Logindata[]>{
    return this.httpRef.get<Logindata[]>(this.credentialsData)
  }
  public getDashboardData():Observable<Dashboard[]>{
    return this.httpRef.get<Dashboard[]>(this.dashboardData)
  }
  public userAuthenticationStatusFromLogin(authvalue:boolean):void{
   this.userAuthentication=authvalue;
  }

  public getDashboardTableData():Observable<Table2[]>{
  return this.httpRef.get<Table2[]>(this.dashboardTable)
  }

  //api create update read delete
  //reading visitors data
  public getVisitorsDataFromEndpoint():Observable<Table2[]>{
    return this.httpRef.get<Table2[]>(this.apiEndPoint)
  }

  //posting visitors data
  public postVisitorsData(data:VisitorsPost):Observable<VisitorsPost>{
  return this.httpRef.post<VisitorsPost>(this.apiEndPointPost,data)
  }
  //updating visitors data
  public updatingVisitorsData(data:VisitorsPost,id:number):Observable<VisitorsPost>{
   return this.httpRef.put<VisitorsPost>(this.apiEndPointPost+`/id`,data)
  }
  //deleting visitors data
  public deleteVisitorsData(id:number):Observable<VisitorsPost>{
    return this.httpRef.delete<VisitorsPost>(this.apiEndPointPost+`/id`)
  }


  //get jsonplaceholder
  public getjsonPlaceholder():Observable<josnPlaceholder[]>{
    return this.httpRef.get<josnPlaceholder[]>(this.mockApi+'/posts/')
  }
  //post jsonplacecholder
  public postJsonData(data:josnPlaceholderchild):Observable<josnPlaceholder>{
    return this.httpRef.post<josnPlaceholder>(this.mockApi+'/posts/',data)
  }
  //delete jsonplaceholder
  public deleteJsonData(id:number){
    return this.httpRef.delete(this.mockApi+'/posts/'+id)
  }

  //update jsonplaceholder
  public updateJsonplaceholder(id:number,data:josnPlaceholderchild):Observable<josnPlaceholder>{
   return this.httpRef.put<josnPlaceholder>(this.mockApi+'/posts/'+id,data)
  }
  //getonevalue for update
  public getOneValueForUpdate(id:number):Observable<josnPlaceholderchild>{
    return this.httpRef.get<josnPlaceholderchild>(this.mockApi+'/posts/'+id)
  }
  //update only one value
  public updateOneValue(id:number,data:josnPlaceholderchild):Observable<josnPlaceholder>{
    return this.httpRef.put<josnPlaceholder>(this.mockApi+'/posts/'+id,data)
  }

  //automatic logout functionality
   start(timeoutValue:number){
    this.timeOut=setTimeout(()=>{
     this.router.navigateByUrl('/login')
    },timeoutValue)
   }

   reset(){
    clearTimeout(this.timeOut)
    this.start(60000)
   }


   //get jsonplaceholder data

  //  public getJsonPlaceholderData():Observable<any>{
  //   return this.httpRef.post<any>(this.jsonMockApi,{name:'ravi'})
  //  }
}
