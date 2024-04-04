import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowScoreCoursesComponent } from './low-score-courses.component';

describe('LowScoreCoursesComponent', () => {
  let component: LowScoreCoursesComponent;
  let fixture: ComponentFixture<LowScoreCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowScoreCoursesComponent]
    });
    fixture = TestBed.createComponent(LowScoreCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
