import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentsHeader } from '../models/studentsHeader';

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
}
