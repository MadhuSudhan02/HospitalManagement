import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  baseUrl : string = 'http://localhost:3000' ;

  constructor(private httpClient : HttpClient) { }

  postService(
    url : string ,
    requestData : any ,
    token : boolean ,
    httpOption : any 
  ){
    return this.httpClient.post(this.baseUrl + url , requestData , token && httpOption)
  }

  getService(
    url : string ,
    // httpOption : any
  ){
return this.httpClient.get(this.baseUrl +url)
  }
}
