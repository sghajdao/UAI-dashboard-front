import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subscription, mergeMap } from 'rxjs';
import { CoursesResponse } from 'src/app/models/coursesResponse';
import { CoursesService } from 'src/app/services/courses.service';
import { FilterByYearComponent } from '../modals/filter-by-year/filter-by-year.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  constructor(
    private coursesService: CoursesService,
    private _bottomSheet: MatBottomSheet
  ) {}

  data?: CoursesResponse[]
  err: boolean = false
  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const storage = localStorage.getItem("courses");
    const storageDate = localStorage.getItem("date");
    if (storage && storageDate) {
      let date: Date = JSON.parse(storageDate)
      if (!date || new Date().getTime() - new Date(date).getTime() > 86400000)
        this.err = true
      let data: CoursesResponse[] = JSON.parse(storage)
      if (data)
        this.data = data
      else
        this.err = true
    }
    if (!storage || !storageDate || this.err) {
      const sub = this.coursesService.getCoursesData(2).subscribe({
        next: data => {
          this.data = data
          // localStorage.setItem("courses", JSON.stringify(data))
          // localStorage.setItem("date", JSON.stringify(new Date()))
        }
      })
      this.subscriptions.push(sub);
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(FilterByYearComponent);
    const sub = this.coursesService.collegeYear$.pipe(mergeMap(res => this.coursesService.getCoursesData(res))).subscribe({
      next: data => {
        this.data = data
        this.coursesService.collegeYearSource.next(0)
      }
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
