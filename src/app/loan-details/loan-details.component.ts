import { BackendService } from './../backend.service';
import { Loan_details } from './../user_details';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
message:any;
eligible:string;
showloading:boolean=true;
value:string;
loan_approval_message:string;
  constructor(private backend:BackendService) { }
loan:Loan_details[];
  ngOnInit(): void {

setTimeout(() => {
  this.backend.loan().subscribe(x=>{
    this.loan=x;
    this.showloading=false;
  })
}, 500);



  }
  evaluate(income,othet_emi,time,loan_amount,loan_id)
  {

       setTimeout(() => {
         const ID=loan_id;
        const Income_monthly =income;
        const otheemi =othet_emi
        const loan = loan_amount
        const tenure = time
        const intrest = 8;
        const In = (((intrest) / 12) / 100);
        console.log(loan);
        console.log(tenure);
        console.log(In);
        const pow = Math.pow(1 + In, tenure);
        const emi = ((loan * In) * ((pow) / ((pow) - 1)));
        const balance = Income_monthly - emi;
        if (balance >= emi)
         {
             this.message = 'Eligible';
             const result= confirm('Application is'+this.message+'Do you want approve');
             console.log(result);
             if(result==true)
             {
               setTimeout(() => {
                this.backend.loan_approve(loan_id).subscribe(x=>{
                  if(x.status==200)
                  {
                    alert('Successfully Approved Amount has been deposited to Account');
                     this.loan_approval_message="Successfully Approved Amount has been deposited to Account"
                  }
                  else{
                    this.loan_approval_message="try sometimes later";
                  }

              })
               }, 2000);

             }
         }
         else
         {
           this.message = 'Not Eligible';
         }
         let eligible_balance= Income_monthly-othet_emi
         let eligible_loan=eligible_balance*tenure;
         this.eligible="your eligible for "+eligible_loan+"";

         this.showloading=false

       },5000);

       this.showloading=true;
  }


}
