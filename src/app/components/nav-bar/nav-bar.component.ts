import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,private service: HttpServiceService) { }
  isOpen:Boolean = false;
  ngOnInit() {
   
  }
  toggleClick(){
    this.isOpen = !this.isOpen;
        console.log(this.isOpen);
  }
  
  logout() {

  console.log("logout clicked");
    sessionStorage.clear();
    this.service.loginResponce = {};
    this.router.navigate(['/login'])
  }
}
