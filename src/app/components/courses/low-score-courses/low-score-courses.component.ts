import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CoursesResponse } from 'src/app/models/coursesResponse';

@Component({
  selector: 'app-low-score-courses',
  templateUrl: './low-score-courses.component.html',
  styleUrls: ['./low-score-courses.component.css']
})
export class LowScoreCoursesComponent implements OnChanges {

  constructor() {}

  @Input() response?: CoursesResponse[]
  columns?: CoursesResponse[]
  actualColumns?: CoursesResponse[]

  ngOnChanges(changes: SimpleChanges): void {
    if (this.response)
      this.setColumns(this.response)
  }

  setColumns(data: CoursesResponse[]) {
    this.columns = data.filter(item => item.students_with_garde != 0 && item.status != null)
    this.columns = this.columns.sort((a, b) => a.average - b.average)
    this.actualColumns = this.columns.slice(0, 20)
  }

  getScoresBelow70(course: CoursesResponse) {
    let count: number = 0;
    for (let score of course.scores) {
      if (score <= 70)
        count++;
    }
    return count;
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
