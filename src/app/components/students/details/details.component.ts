import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StudentsResponse } from 'src/app/models/studentsResponse';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {

  @Input() data?: StudentsResponse[]
  @Input() average?: number
  column?: StudentsResponse[]

  constructor() {}

  ngOnChanges(): void {
    if (this.data) {
      this.data = this.data.filter(item => item.average_grade != null)
      this.data = this.data.sort((a, b) => b.courses_enrolled - a.courses_enrolled)
      this.data = this.data.slice(0, 25)
    }
  }

  getCoursesUnderAvg(id: number) {
    let scores: number[] = []
    if (this.data && this.average) {
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index].user_id == id) {
          scores = this.data[index].courses_score.filter(score => score < this.average!)
          return scores.length;
        }
      }
    }
    return 0;
  }
}
