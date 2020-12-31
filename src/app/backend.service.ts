import { account_details, transactiondetails, Loan_details } from './user_details';
import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';






@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  account_list():Observable<account_details[]>{
    const httpheaders = new HttpHeaders({
      'content-type': 'application/json'
    });
    return this.http.get<account_details[]>('http://127.0.0.1:8080/api/Admin/Account_list',{headers:httpheaders})
  }
  serach(data):Observable<account_details[]>
  {
    const httpheaders=new HttpHeaders({
      'content-type':'application/json'
    });
    return this.http.get<account_details[]>('http://127.0.0.1:8080/api/Admin/search?search_criteria='+data,{headers:httpheaders})
  }

  userdetails(id):Observable<account_details[]>
  {
    const httpheaders=new HttpHeaders({
      'content-type':'application/json'
    });
    return this.http.get<account_details[]>('http://127.0.0.1:8080/api/Admin/userdetails?id='+id,{headers:httpheaders})
  }

   transactiondetails(id):Observable<transactiondetails[]>
   {
     const httpheaders=new HttpHeaders({
       'content-type':'application/json'
     })
     return this.http.get<transactiondetails[]>('http://127.0.0.1:8080/api/Admin/transaction?id='+id,{headers:httpheaders})
   }

   loan_details(id):Observable<Loan_details[]>
   {
     const httpheaders=new HttpHeaders({
       'content-type':'application/json'
     })
     return this.http.get<Loan_details[]>('http://127.0.0.1:8080/api/Admin/loandetails?id='+id);
   }

   loan():Observable<Loan_details[]>
   {
     const httpheaders=new HttpHeaders({
       'content-type':'application/json'
     });
     return this.http.get<Loan_details[]>('http://127.0.0.1:8080/api/Admin/loan',{headers:httpheaders})
   }

   filter(data):Observable<Loan_details[]>
   {
     const httpheaders = new HttpHeaders({
       'content-type':'application/json'
     });
     return this.http.get<Loan_details[]>('http://127.0.0.1:8080/api/Admin/loansearch?value='+data,{headers:httpheaders})
   }

   loan_approve(id)
   {
      const httpheaders=new HttpHeaders({
        'content-type':'application/json'
      });
      return this.http.get('http://127.0.0.1:8080/api/Admin/loan_approve?id='+id,{headers:httpheaders,observe:'response'});
   }

   delete(id)
   {
     const httpheaders=new HttpHeaders({
       'content-type':'application/json'
     });
     return this.http.delete('http://127.0.0.1:8080/api/Admin/UserDelete?id='+id,{headers:httpheaders,observe:'response'})
   }
}
