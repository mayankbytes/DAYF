import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  loginUser(request){
    console.log(request)
    return this.http.post<any>(environment.user_base_url+'/login',request);
    }
    registerUser(request){
      console.log(request)
      return this.http.post<any>(environment.user_base_url+'/register',request);
      }
  
}
