import { Component } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showloading: boolean = true

  constructor(private route: Router) {

  }

  ngOnInit(): void {

    this.route.navigate(['login'])
  }
}

