import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StudentsResponse } from 'src/app/models/studentsResponse';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {

  @Input() data?: StudentsResponse[]
  column?: StudentsResponse[]

  constructor() {}

  ngOnChanges(): void {
    if (this.data) {
      this.data = this.data.filter(item => item.average_grade != null)
      this.data = this.data.sort((a, b) => b.courses_enrolled - a.courses_enrolled)
      this.data = this.data.slice(0, 25)
    }
  }
}
