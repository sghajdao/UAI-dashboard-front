import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoursesResponse } from '../models/coursesResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  getCoursesData() {
    return this.http.get<CoursesResponse[]>(environment.coursesRequest + 'api/courses/');
  }
}
