import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersgaurdService {

  constructor(private routerRef:Router) { }

  public canActivate():boolean{
    const isUsersAuthentication = localStorage.getItem('isUsersAuthentication');
    if(isUsersAuthentication==='true'){
      return true
    }else{
      this.routerRef.navigateByUrl('/login')
      return false
    }
    }
}
