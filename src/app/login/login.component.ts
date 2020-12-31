import { login_details } from './../login_details';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,Event,NavigationStart,NavigationEnd, RouterEvent} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string="admin";
pass:string="12345"
message:string;
showloading:boolean=true
  constructor(private route:Router) {

  }
  ld:login_details = {
    username:null,
    password:null
  }

  ngOnInit(): void {
  }
  login()
  {
    console.log(this.ld.username, this.ld.password)
    if(this.uname==this.ld.username && this.pass==this.ld.password)
    {
       localStorage.setItem("guard",this.ld.username)
       this.route.navigate(['home']);
    }
    else{
      this.message="invalid Username and password"
    }
  }

}
