import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { environment } from '../../../environments/environment'
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isOtpSend: any = false;
  user: any = {};
  requestDTO: any = {};
  alertMsg: any;
  alertFlag: any = false;
  count: any = 0
  showProgress: any = false;
  email: string;
  name: string;
  password: string;
  
  constructor(private router: Router, private service: HttpServiceService) { }
  ngOnInit(): void {
    this.user.userType = "1";
    sessionStorage.clear();
    this.count = 0;
  }


  register() : void {
    console.log('login Click')
    this.showProgress = true;
    this.requestDTO.user = this.user;
    this.requestDTO.source = 'web'
    this.requestDTO.name = this.name
    this.requestDTO.email = this.email
    this.requestDTO.password = this.password
    this.service.registerUser(this.requestDTO).subscribe(res => {
      console.log(res);
      if (res.error == environment.success_code) {
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/login'])
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
