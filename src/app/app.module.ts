import { AuthGuard } from './auth.guard';
import { BackendService } from './backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EditComponent } from './edit/edit.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoanComponent } from './loan/loan.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LogoutComponent } from './logout/logout.component';




const ROUTES: Routes=[
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'userdetail/:id',component:UserdetailsComponent,canActivate:[AuthGuard]},
  {path:'edit/:id',component:EditComponent,canActivate:[AuthGuard]},
  {path:'transaction/:id',component:TransactionComponent,canActivate:[AuthGuard]},
  {path:'loan/:id',component:LoanComponent,canActivate:[AuthGuard]},
  {path:'loan-details',component:LoanDetailsComponent,canActivate:[AuthGuard]},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserdetailsComponent,
    EditComponent,
    TransactionComponent,
    LoanComponent,
    LoanDetailsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [BackendService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
