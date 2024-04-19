import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toCourses({index: 0} as MatTabChangeEvent)
  }

  selectedTabIndex: number = 0; 
  toCourses(event: MatTabChangeEvent) {
    if (event.index === 0)
      this.router.navigateByUrl('/')
    else if (event.index === 1)
      this.router.navigateByUrl('/courses')
    else if (event.index === 2)
      this.router.navigateByUrl('/admin')
  }
}
