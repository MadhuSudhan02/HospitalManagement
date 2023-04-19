import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpclient/http-client.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  token : any
  constructor(private httpService : HttpClientService) { }

  signUpPost(requestData : any){
    let httpHeaderOption = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json' 
        
      })
      
    }
    return this.httpService.postService('/user' , requestData , false , httpHeaderOption )
  } 

  loginService(requestData : any){
    let httpHeaderOption = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpService.postService('/login' , requestData , false , httpHeaderOption)
  }
}
