import { modification } from './../Modification';
import { HttpClient } from '@angular/common/http';
import { BackendService } from './../backend.service';
import { account_details } from './../user_details';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';





@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
x:number;
showloading:boolean=true
message:string;
Loading:boolean=false;
  constructor(private ativatedroute:ActivatedRoute,private backend:BackendService,private http:HttpClient) {
    this.x=parseInt(this.ativatedroute.snapshot.paramMap.get("id"));
   }
   modific:modification={
    Name:null,
    Password:null,
   DOB:null,
    Account_number:null,
   Email_address:null,
    Balance:null
   }
account:account_details[];
  ngOnInit(): void {
     setTimeout(() => {
      this.backend.userdetails(this.x).subscribe(x=>{
        this.account=x;
        this.showloading=false;
      })
     },500);
  }
  Update(p)
  {
    this.Loading=true;
     setTimeout(() => {
      console.log(p)

      this.http.post("http://127.0.0.1:8080/api/Admin/Modeifyuser?id="+this.x,{
       Name:this.modific.Name,
       Password:this.modific.Password,
       DOB:this.modific.DOB,
       Account_number:this.modific.Account_number,
       Email_address:this.modific.Email_address,
       Balance:this.modific.Balance,
      },{observe: 'response'}).subscribe(x=>{
        if(x.status==200)
        {
           this.message="Successfully modified"
        }
       else{
         this.message="Try some other time"
       }
      });
      this.Loading=false;
     },5000);


  }

}
