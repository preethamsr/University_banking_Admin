import { BackendService } from './../backend.service';
import { Loan_details } from './../user_details';
import { login_details } from './../login_details';
import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
x:number
showloading:boolean=true;
value:string;
  constructor(private route:Router,private activatedroute:ActivatedRoute,private backend:BackendService) {
    this.x=parseInt(this.activatedroute.snapshot.paramMap.get('id'))
  }
loan:Loan_details[];
  ngOnInit(): void {

    setTimeout(() => {
      this.backend.loan_details(this.x).subscribe(x=>{
        this.loan=x;
        this.showloading=false;
      })
    },500);

  }
  filter(){

  }

}
