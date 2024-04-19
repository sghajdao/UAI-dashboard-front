import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(
    private router: Router
  ) {}

  toCourses(event: MatTabChangeEvent) {
    if (event.tab.textLabel === 'Students')
      this.router.navigateByUrl('/')
    else if (event.tab.textLabel === 'Courses')
      this.router.navigateByUrl('/courses')
    else if (event.tab.textLabel === 'Admin')
      this.router.navigateByUrl('/admin')
  }
}
