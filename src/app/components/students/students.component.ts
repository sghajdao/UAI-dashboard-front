import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subscription, mergeMap, take } from 'rxjs';
import { StudentsResponse } from 'src/app/models/studentsResponse';
import { StudentsService } from 'src/app/services/sutdents.service';
import { FilterByYearComponent } from '../modals/filter-by-year/filter-by-year.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  constructor(
    private studentsService: StudentsService,
    private _bottomSheet: MatBottomSheet
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
      if (!date || new Date().getTime() - new Date(date).getTime() > 86400000)
        this.err = true
      let data: StudentsResponse[] = JSON.parse(storage)
      if (data)
        this.response = data
      else
        this.err = true
    }
    if (!storage || !storageDate || this.err) {
      const sub = this.studentsService.getStudentsData(2).subscribe({
        next: resp => {
          this.response = resp
          // localStorage.setItem("students", JSON.stringify(resp))
          // localStorage.setItem("date", JSON.stringify(new Date()))
        }
      })
      this.subscriptions.push(sub);
    }
  }

  getAverage(avg: number) {
    this.average = avg
  }

  openBottomSheet(): void {
    this._bottomSheet.open(FilterByYearComponent);
    const sub = this.studentsService.collegeYear$.pipe(mergeMap(res => this.studentsService.getStudentsData(res))).subscribe({
      next: data => {
        this.response = data
        this.studentsService.collegeYearSource.next(0)
      }
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
