import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CoursesResponse } from 'src/app/models/coursesResponse';

@Component({
  selector: 'app-low-activity-courses',
  templateUrl: './low-activity-courses.component.html',
  styleUrls: ['./low-activity-courses.component.css']
})
export class LowActivityCoursesComponent implements OnChanges {

  constructor() {}

  @Input() response?: CoursesResponse[]
  columns?: CoursesResponse[]
  actualColumns?: CoursesResponse[]

  ngOnChanges(changes: SimpleChanges): void {
    if (this.response)
      this.setColumns(this.response);
  }

  setColumns(data: CoursesResponse[]) {
    this.columns = data.filter(item => item.students_with_garde != 0 && item.status != null)
    this.columns = this.columns.sort((a, b) => (b.inactive_students * 100 / b.all_students) - (a.inactive_students * 100 / a.all_students))
    this.actualColumns = this.columns.slice(0, 20)
  }

  start: number = 20
  onScroll(event: any) {
    const bottomPosition = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottomPosition && this.columns) {
      this.actualColumns = this.actualColumns?.concat(this.columns.slice(this.start, this.start + 20))
      this.start += 20
    }
  }
}
