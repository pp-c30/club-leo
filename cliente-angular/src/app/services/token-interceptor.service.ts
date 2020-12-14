import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }


  //intercepta las solicitudes y le agrega un token a cada peticion http que se haga, y la api recive un token
  intercept(req,next)
  {
    const tokenizeRequest = req.clone({
      setHeaders:{
        authorization:String(localStorage.getItem('token'))
      }
    });
    return next.handle(tokenizeRequest);
  }
}
