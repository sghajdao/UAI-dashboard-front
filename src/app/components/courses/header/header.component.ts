import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CoursesResponse } from 'src/app/models/coursesResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges{

  constructor() {}

  @Input() response?: CoursesResponse[];

  published: number = 0;
  concluded: number = 0;
  averages: number = 0;
  coursesWithNoActivity: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.response)
      this.setheader(this.response);
  }

  setheader(data: CoursesResponse[]) {
    for (let course of data) {
      if (course.status === 'published')
        this.published++;
      else if (course.status === 'concluded')
        this.concluded++;
      if (course.average)
        this.averages++;
      if ((course.inactive_students * 100 / course.all_students) >= 60)
        this.coursesWithNoActivity++;
    }
  }
}
