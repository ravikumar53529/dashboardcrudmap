import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService{

  constructor(private router:Router) { }
  // canActivate(): boolean  {
  //   const isAuthenticate=localStorage.getItem('isAuthenticate')
  //   console.log(isAuthenticate==='true')
  //   if(isAuthenticate){
  //     return true
  //   }else{
  //     this.router.navigateByUrl('/login')
  //     return false
  //   }
  // }
  public canActivate():boolean{
    const isAuthenticate = localStorage.getItem('isAuthenticate');
    if(isAuthenticate==='true'){
      return true
    }else{
      this.router.navigateByUrl('/login')
      return false
    }
    }


}
