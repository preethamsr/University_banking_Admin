import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    localStorage.removeItem("guard");
     this.route.navigate(['login']);
  }

}
