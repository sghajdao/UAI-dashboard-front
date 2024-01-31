import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { StudentsResponse } from 'src/app/models/studentsResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {

  @Input() response?: StudentsResponse[]
  @Output() finished: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() average: EventEmitter<number> = new EventEmitter<number>()

  constructor() {}

  ngOnChanges(): void {
    if (this.response) {
      this.setHeader(this.response)
      this.finished.emit(true)
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
    for (let index = 0; index < data.length; index++) {
      if (data[index].average_grade != null) {
        if (data[index].average_grade < 60)
          this.scoresUnderSixty++;
        this.avgs += data[index].average_grade
        this.avgs_count++;
      }
      if (data[index].since_last_activity >= 30)
        this.no_activities++;
      this.since_last_attended += data[index].since_last_attended;
    }
    this.avgs = this.avgs / this.avgs_count
    this.since_last_attended = this.since_last_attended / data.length
    this.percentageScore = this.scoresUnderSixty * 100 / data.length
    this.percentageNoAct = this.no_activities * 100 / data.length
    this.average.emit(this.avgs);
  }
}
