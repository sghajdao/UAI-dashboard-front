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
  average?: number
  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const storage = localStorage.getItem("students");
    const storageDate = localStorage.getItem("date");
    if (storage && storageDate) {
      let date: Date = JSON.parse(storageDate)
      // if (!date || new Date().getTime() - new Date(date).getTime() > 86400000)
      //   this.err = true
      let data: StudentsResponse[] = JSON.parse(storage)
      if (data)
        this.response = data
      else
        this.err = true
    }
    if (!storage || !storageDate || this.err) {
      const sub = this.studentsService.getStudentsData().subscribe({
        next: resp => {
          this.response = resp
          localStorage.setItem("students", JSON.stringify(resp))
          localStorage.setItem("date", JSON.stringify(new Date()))
        }
      })
      this.subscriptions.push(sub);
    }
  }

  getAverage(avg: number) {
    this.average = avg
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
