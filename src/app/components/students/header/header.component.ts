import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { StudentsResponse } from 'src/app/models/studentsResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {

  @Input() response?: StudentsResponse[]
  @Output() average: EventEmitter<number> = new EventEmitter<number>()

  constructor() {}

  ngOnChanges(): void {
    if (this.response) {
      this.setHeader(this.response)
    }
  }

  scoresUnderSixty: number = 0;
  avgs: number = 0;
  avgs_count: number = 0;
  no_activities: number = 0;
  since_last_attended: number = 0;
  percentageScore: number = 0
  percentageNoAct : number = 0

  setHeader(data: StudentsResponse[]) {
    for (const student of data) {
      if (student.average_grade != null) {
        if (student.average_grade < 60)
          this.scoresUnderSixty++;
        this.avgs += student.average_grade
        this.avgs_count++;
      }
      if (student.since_last_activity >= 30)
        this.no_activities++;
      this.since_last_attended += student.since_last_attended;
    }
    this.avgs /= this.avgs_count
    this.since_last_attended = this.since_last_attended / data.length
    this.percentageScore = this.scoresUnderSixty * 100 / data.length
    this.percentageNoAct = this.no_activities * 100 / data.length
    // this.no_activities = Intl.NumberFormat('en-US').format(this.no_activities) add comma after 3 numbers
    this.average.emit(this.avgs);
  }
}
