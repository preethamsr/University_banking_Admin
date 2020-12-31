import { account_details } from './../user_details';
import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Event,NavigationStart,NavigationEnd, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
x:number
showloading:boolean=true
message:string;
deleting:boolean=false
  constructor(private route:Router,private activatedroute:ActivatedRoute,private backend:BackendService) {
    this.x=parseInt(this.activatedroute.snapshot.paramMap.get('id'))
    console.log(this.x)
   /* this.route.events.subscribe((routerevent:Event)=>{
      if(routerevent instanceof NavigationStart)
      {
        this.showloading=true;
      }
     /* if(routerevent instanceof NavigationEnd)
      {
       // this.showloading=false;
      }*/
    //})
   }
   account:account_details[];

  ngOnInit(): void {
    setTimeout(() => {
      this.backend.userdetails(this.x).subscribe(x=>{
        this.account=x;
        this.showloading=false;
      })
    }, 500);

  }
  edit()
  {
    this.route.navigate(['edit',this.x])
  }
  transaction()
  {
    this.route.navigate(['transaction',this.x])
  }
  Loan()
  {
    this.route.navigate(['loan',this.x])
  }
  Delete(){
    this.deleting=true;
    const deleteitem= confirm("Are you sure want to Delete")
    setTimeout(() => {
    if(deleteitem==true)
    {
        this.backend.delete(this.x).subscribe(x=>{
          if(x.status==200)
          {

                this.message="Successfully Deleted"
                this.deleting=false

              this.route.navigate(['home']);
          }
          else
          {
              this.message="Unable to delete";
              this.deleting=false;
          }
        })
    }
    }, 4000);
      this.deleting=false;

  }

}
