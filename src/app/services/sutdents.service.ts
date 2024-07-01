import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentsResponse } from '../models/studentsResponse';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }

  collegeYearSource = new BehaviorSubject<number>(0)
  collegeYear$ = this.collegeYearSource.asObservable()

  getStudentsData(i: number) {
    if (i != 0)
      return this.http.get<StudentsResponse[]>(environment.studentsRequest + 'api/students/' + i)
    return new Observable<StudentsResponse[]>()
  }
}
