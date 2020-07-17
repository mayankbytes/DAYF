import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  loginResponce: any = JSON.parse(sessionStorage.getItem('loginResponce'));
  constructor(private http: HttpClient) { }
  loginUser(request){
    console.log(request)
    this.http.post<any>(environment.user_base_url+'/login',request).subscribe(res => {
      console.log(res)
      if (res.error  == environment.success_code) {
        sessionStorage.setItem('loginResponce', JSON.stringify(res));
        this.loginResponce = JSON.parse(sessionStorage.getItem('loginResponce'));
        console.log("Change of bool",this.loginResponce);
      }
    },
    error => {}
    )
    return this.http.post<any>(environment.user_base_url+'/login',request);
    }
    registerUser(request){
      console.log(request)
      return this.http.post<any>(environment.user_base_url+'/register',request);
      }
}
