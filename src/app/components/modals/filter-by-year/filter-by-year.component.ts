import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { StudentsComponent } from '../../students/students.component';
import { StudentsService } from 'src/app/services/sutdents.service';

@Component({
  selector: 'app-filter-by-year',
  standalone: false,
  templateUrl: './filter-by-year.component.html',
  styleUrl: './filter-by-year.component.css'
})
export class FilterByYearComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<StudentsComponent>,
    private studentService: StudentsService,
  ) {}

  openLink(event: MouseEvent, year: number): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    this.studentService.collegeYearSource.next(year)
  }
}
