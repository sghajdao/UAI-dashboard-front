import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentsChart } from 'src/app/models/studentsChart';
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
  chartData?: StudentsChart
  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const storage = localStorage.getItem("chart");
    if (storage) {
      let data: StudentsChart = JSON.parse(storage)
      if (data) {
        this.chartData = data
      }
      else
        this.err = true
    }
    else if (!storage || this.err) {
      const sub = this.studentsService.getChartsData().subscribe({
        next: data => {
          this.chartData = data
          localStorage.setItem("chart", JSON.stringify(data))
        }
      })
      this.subscriptions.push(sub)
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
