import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs';
export const  myCanActivateFn:CanActivateFn=(
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot
)=>{
  const isAuthenticate = localStorage.getItem('isAuthenticate');
  if(isAuthenticate==='true'){
    return true
  }else{
    // this.router.navigateByUrl('/login')
    return false
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router:Router){}

  // public canActivate():boolean{
  //   const isAuthenticate = localStorage.getItem('isAuthenticate');
  //   if(isAuthenticate==='true'){
  //     return true
  //   }else{
  //     this.router.navigateByUrl('/login')
  //     return false
  //   }
  //   }
  
}
