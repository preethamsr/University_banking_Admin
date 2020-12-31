import { transactiondetails } from './../user_details';
import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
x:number;
showloading:boolean=true;
  constructor(private backend:BackendService,private route:Router,private Activatedroute:ActivatedRoute) {
    this.x=parseInt( this.Activatedroute.snapshot.paramMap.get('id'))
   }
transaction:transactiondetails[];
  ngOnInit(): void {
    setTimeout(() => {
      this.backend.transactiondetails(this.x).subscribe(x=>{
        this.transaction=x;
        this.showloading=false
      })
    },500);

  }

}
