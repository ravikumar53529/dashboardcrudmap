import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class SampleinterceptorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  let modifiedReg=request.clone({
    method:'post',
    body:{
      product:'redmi note6'
    },
   headers:new HttpHeaders({
    Authorization:`Bearer {1234666sdajdsbjbsjdbjs}`
   })
  
  })
  
    return next.handle(modifiedReg)
  }
}
