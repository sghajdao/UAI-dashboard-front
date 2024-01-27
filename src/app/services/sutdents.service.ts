import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentsHeader } from '../models/studentsHeader';
import { StudentsChart } from '../models/studentsChart';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }

  getHeader() {
    return this.http.get<StudentsHeader>(environment.urlRequest + 'api/students/header')
  }

  getChartsData() {
    return this.http.get<StudentsChart>(environment.urlRequest + 'api/students/chart')
  }
}
