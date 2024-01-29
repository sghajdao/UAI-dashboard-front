import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentsResponse } from '../models/studentsResponse';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }

  getStudentsData() {
    return this.http.get<StudentsResponse[]>(environment.urlRequest + 'api/students/')
  }
}
