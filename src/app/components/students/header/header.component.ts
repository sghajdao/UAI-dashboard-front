import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/sutdents.service';
import { StudentsHeader } from 'src/app/models/studentsHeader';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(
    private studentsService: StudentsService,
  ) {}

  headerData?: StudentsHeader
  percentageScore?: number
  percentageNoAct?: number
  fixed?: string
  err: boolean = false
  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const storage = localStorage.getItem("header")
    if (storage) {
      this.headerData = JSON.parse(storage)
      if (this.headerData) {
        this.percentageScore = this.headerData.score_under_sixty * 100 / this.headerData.enrolled_students
        this.percentageNoAct = this.headerData.no_activity_students * 100 / this.headerData.enrolled_students
      }
      else
        this.err = true
    }
    else if (!storage || this.err) {
      const sub = this.studentsService.getHeader().subscribe({
        next: data=> {
          this.headerData = data
          this.percentageScore = this.headerData.score_under_sixty * 100 / this.headerData.enrolled_students
          this.percentageNoAct = this.headerData.no_activity_students * 100 / this.headerData.enrolled_students
          localStorage.setItem("header", JSON.stringify(data));
        }
      })
      this.subscriptions.push(sub);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
