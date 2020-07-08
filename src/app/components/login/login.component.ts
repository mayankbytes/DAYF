import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpServiceService } from '../../services/http-service.service';
import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isOtpSend: any = false;
  user: any = {};
  requestDTO: any = {};
  alertMsg: any;
  alertFlag: any = false;
  count: any = 0
  showProgress: any = false;
  email: string;
  password: string;
  

  constructor(private router: Router, private service: HttpServiceService) { }
  ngOnInit(): void {
    this.user.userType = "1";
    sessionStorage.clear();
    this.count = 0;
  }


  login() : void {
    console.log('login Click')
    this.showProgress = true;
    this.requestDTO.user = this.user;
    this.requestDTO.source = 'web'
    this.requestDTO.email = this.email
    this.requestDTO.password = this.password
    this.service.loginUser(this.requestDTO).subscribe(res => {
      console.log(res);
      if (res.error == environment.success_code) {
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/register'])
      }
      else {
        this.triggerAlert(res.statusDesc)
      }
      this.showProgress = false;
    },
      error => {
        console.log(error)
        this.showProgress = false;
        this.triggerAlert("Something went wrong. Please try again later.")

      })

  }
  triggerAlert(msg) {
    this.count++;
    this.alertFlag = true;
    this.alertMsg = msg;
  }

}
