import { BackendService } from './../backend.service';
import { account_details } from './../user_details';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router,Event,NavigationStart,NavigationEnd, RouterEvent} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 search:string
 showloading:boolean=true;


  constructor(private http:HttpClient,private backend:BackendService, private route:Router) {

}
account:account_details[];

  ngOnInit(): void {
    setTimeout(() => {
      this.backend.account_list().subscribe(data=>{
        this.account=data;
        this.showloading=false;

       })

    },500);


  }
  searchitem()
  {
    if(this.search==null){
        this.ngOnInit()
    }
    else{

     this.backend.serach(this.search).subscribe(x=>{
       this.account=x;
     })
    }
  }

  user_details(userid:number)
  {
    console.log(userid)
    this.route.navigate(['userdetail',userid])

  }

}
