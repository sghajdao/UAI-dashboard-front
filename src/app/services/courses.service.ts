import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoursesResponse } from '../models/coursesResponse';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  collegeYearSource = new BehaviorSubject<number>(0)
  collegeYear$ = this.collegeYearSource.asObservable()

  getCoursesData(i: number) {
    return this.http.get<CoursesResponse[]>(environment.coursesRequest + 'api/courses/' + i);
  }
}
