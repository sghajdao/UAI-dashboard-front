import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/sutdents.service';
import { StudentsHeader } from 'src/app/models/studentsHeader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private studentsService: StudentsService,
  ) {}

  headerData?: StudentsHeader

  ngOnInit(): void {
    this.studentsService.getHeader().subscribe({
      next: data=> {
        this.headerData!.average_days = data.average_days
        this.headerData!.average_grade = data.average_grade
        this.headerData!.enrolled_students = data.enrolled_students
        this.headerData!.no_activity_students = data.no_activity_students
        this.headerData!.score_under_sixty = data.score_under_sixty
        console.log("saad")
        console.log(this.headerData)
      }
    })
  }
}
