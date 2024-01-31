import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentsResponse } from 'src/app/models/studentsResponse';
import { StudentsService } from 'src/app/services/sutdents.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  constructor(
    private studentsService: StudentsService
  ) {}

  err: boolean = false
  response?: StudentsResponse[]
  finished: boolean[] = [false, false];
  average?: number
  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const storage = localStorage.getItem("data");
    if (storage) {
      let data: StudentsResponse[] = JSON.parse(storage)
      if (data)
        this.response = data
      else
        this.err = true
    }
    else if (!storage || this.err) {
      const sub = this.studentsService.getStudentsData().subscribe({
        next: resp => {
          this.response = resp
          localStorage.setItem("data", JSON.stringify(resp))
        }
      })
      this.subscriptions.push(sub);
    }
  }

  finishedHeader(finish: boolean) {
    this.finished[0] = finish;
  }

  finishedOverall(finish: boolean) {
    this.finished[1] = finish
  }

  getAverage(avg: number) {
    this.average = avg
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
